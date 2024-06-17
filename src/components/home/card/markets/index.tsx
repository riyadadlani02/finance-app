import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import useMarketQuotes from "@/lib/hooks/useMarketQuotes";
import QuoteData from "./quote";
import { useSearchParams } from "next/navigation";
import useMarketData from "@/lib/hooks/useMarketData";

const MarketsCard = () => {
  const { data } = useMarketQuotes();
  const useSearch = useSearchParams();
  const symbol = useSearch.get("symbol");
  const { data: marketData } = useMarketData({
    symbol: symbol,
    timeframe: "1month",
  });
  console.log("====================================");
  console.log(marketData);
  console.log("====================================");

  return (
    <div className="space-y-3">
      <h2 className="font-medium text-muted-foreground ">Markets</h2>
      <Card>
        <CardContent className="flex pt-6 ">
          <QuoteData data={data} />
          <div></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketsCard;
