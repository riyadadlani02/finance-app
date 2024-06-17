import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  elderRay,
  ema,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  LineSeries,
  CrossHairCursor,
  lastVisibleItemBasedZoomAnchor,
} from "react-financial-charts";
import { timeframe } from "@/lib/constants";
import useQuotes from "@/lib/hooks/useQuotes";

interface Props {
  marketData: FinancialData | null;
  quoteData: Symbols | null;
}

const MarketChart: React.FC<Props> = ({ marketData, quoteData }) => {
  const router = useRouter();
  const useSearch = useSearchParams();
  const symbol = useSearch.get("symbol");
  const tf = useSearch.get("timeframe");

  const handleTimeframeChange = (newTimeframe: string) => {
    router.push(`?symbol=${symbol || ""}&timeframe=${newTimeframe}`);
  };

  const selectedQuote = symbol ? quoteData?.[symbol] : null;

  const { formatNumber } = useQuotes();

  const ScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor(
      (d: { date: string }) => new Date(d.date)
    );

  const height = 700;
  const margin = { left: 0, right: 48, top: 0, bottom: 24 };

  const ema12 = ema()
    .id(1)
    .options({ windowSize: 12 })
    .merge((d: any, c: number) => {
      d.ema12 = c;
    })
    .accessor((d: any) => d.ema12);

  const ema26 = ema()
    .id(2)
    .options({ windowSize: 26 })
    .merge((d: any, c: number) => {
      d.ema26 = c;
    })
    .accessor((d: any) => d.ema26);

  const elder = elderRay();

  if (!marketData) return;

  const calculatedData = elder(ema26(ema12(marketData.values)));
  const { data, xScale, xAccessor, displayXAccessor } =
    ScaleProvider(calculatedData);
  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max + 5];

  const gridHeight = height - margin.top - margin.bottom;
  const elderRayHeight = 100;
  const chartHeight = gridHeight - elderRayHeight;

  const lineChartExtents = (data: any) => [data.high, data.low];

  return (
    <div className="">
      <div className="flex space-x-3 justify-between items-start">
        <div className="flex flex-col">
          <span className="font-semibold">{selectedQuote?.name}</span>
          <span className="text-xs text-muted-foreground">
            {selectedQuote && formatNumber(selectedQuote?.previous_close)}
          </span>
        </div>
        <div className="flex space-x-3">
          {timeframe.map((item, index) => (
            <div key={index} onClick={() => handleTimeframeChange(item.id)}>
              <span
                className={`text-muted-foreground cursor-pointer text-xs font-semibold ${
                  tf?.includes(item.id) && "text-white"
                }`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ChartCanvas
        height={600}
        ratio={3}
        width={500}
        margin={margin}
        data={data}
        displayXAccessor={displayXAccessor}
        seriesName="Data"
        xScale={xScale}
        xAccessor={xAccessor}
        xExtents={xExtents}
        zoomAnchor={lastVisibleItemBasedZoomAnchor}
      >
        <Chart id={3} height={chartHeight} yExtents={lineChartExtents}>
          <LineSeries yAccessor={(d: any) => d.close} strokeStyle="white" />
          <LineSeries
            yAccessor={ema12.accessor()}
            strokeStyle={ema12.stroke()}
          />
          <LineSeries
            yAccessor={ema26.accessor()}
            strokeStyle={ema26.stroke()}
          />
        </Chart>

        <CrossHairCursor />
      </ChartCanvas>
    </div>
  );
};

export default MarketChart;
