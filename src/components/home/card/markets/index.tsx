import React, { Fragment } from "react";
import MarketChart from "./chart";
import MarketQuote from "./quote";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  quoteData: Symbols | null;
  marketData: FinancialData | null;
  symbol: string | null;
}

const MarketsCard = ({ symbol, quoteData, marketData }: Props) => {
  return (
    <div className="space-y-3">
      <h2 className="font-medium text-muted-foreground ">Markets</h2>
      <Card>
        <CardContent
          className={`flex pt-6 ${
            marketData?.values ? "justify-between " : "space-x-6"
          }`}
        >
          {!marketData ||
          !marketData.values ||
          marketData.values.length === 0 ? (
            <div className="font-medium text-sm flex items-center justify-center w-full">
              There is no market data availabe.
            </div>
          ) : (
            <Fragment>
              <MarketQuote quoteData={quoteData} symbol={symbol} />
              <MarketChart marketData={marketData} quoteData={quoteData} />
            </Fragment>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketsCard;
