import useQuotes from "@/lib/hooks/useQuotes";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  quoteData: Symbols | null;
  symbol: string | null;
}

const MarketQuote = ({ quoteData, symbol }: Props) => {
  const {
    formatNumber,
    getFirstTwoWords,
    getChangeColor,
    getPercentChangeColor,
  } = useQuotes();
  const router = useRouter();

  return (
    <ul className="w-[40%]">
      {quoteData &&
        Object.keys(quoteData).map((key, index) => {
          const item = quoteData[key];
          return (
            <li key={index}>
              <button
                className={`flex justify-between items-center text-xs w-full hover:bg-muted px-1.5 rounded-md py-1.5 ${
                  symbol?.includes(item.symbol) && "bg-muted"
                }`}
                onClick={() =>
                  router.push(`?symbol=${item.symbol}&timeframe=1day`)
                }
              >
                <div className="truncate">
                  <span className="font-bold text-left truncate">
                    {getFirstTwoWords(item.name)}
                  </span>
                </div>
                <div className="flex space-x-7 items-center">
                  <span>{formatNumber(item.close)}</span>
                  <div className="w-10">
                    <span className={getChangeColor(item.change)}>
                      {formatNumber(item.change)}
                    </span>
                  </div>
                  <div
                    className={`text-green-400 ${getChangeColor(
                      item.change
                    )} ${getPercentChangeColor(
                      item.percent_change
                    )} w-20 py-0.5 rounded-md`}
                  >
                    <span>{formatNumber(item.percent_change)}%</span>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default MarketQuote;
