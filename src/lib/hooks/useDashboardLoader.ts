import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useNewsSentiment from "@/lib/hooks/useSentimentData";
import useSectorPerformannceData from "@/lib/hooks/useSectorPerformanceData";
import useMarketQuotes from "@/lib/hooks/useMarketQuotes";
import useMarketData from "@/lib/hooks/useMarketData";

const useDashboardLoader = () => {
  const { data: newsSentiment, loading: newsLoading } = useNewsSentiment();
  const { data: quoteData, loading: quoteDataLoading } = useMarketQuotes();
  const useSearch = useSearchParams();
  const symbol = useSearch.get("symbol");
  const timeframe = useSearch.get("timeframe");
  const router = useRouter();
  const { data: sectorPerformance, loading: sectorPerformanceLoading } =
    useSectorPerformannceData();
  const { data: marketData, loading: marketDataLoading } = useMarketData({
    symbol: symbol,
    timeframe: timeframe,
  });

  useEffect(() => {
    if (!symbol || !timeframe) {
      router.push("?symbol=SPX&timeframe=1day");
    }
  }, [symbol, timeframe, router]);

  return {
    newsSentiment,
    newsLoading,
    quoteData,
    quoteDataLoading,
    sectorPerformance,
    sectorPerformanceLoading,
    marketData,
    marketDataLoading,
    symbol,
  };
};

export default useDashboardLoader;
