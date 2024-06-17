import useQuoteUtils from "@/lib/hooks/useTextUtils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  data: Symbols | null;
}

const QuoteData = ({ data }: Props) => {
  const {
    formatNumber,
    getFirstTwoWords,
    getChangeColor,
    getPercentChangeColor,
  } = useQuoteUtils();
  const router = useRouter();

  return (
    <ul className="w-[40%]">
      {data &&
        Object.keys(data).map((key, index) => {
          const item = data[key];
          return (
            <li key={index}>
              <button
                className="flex justify-between items-center text-xs w-full hover:bg-muted px-1.5 rounded-md py-1.5"
                onClick={() => router.push(`/dashboard?symbol=${item.symbol}`)}
              >
                <div className="">
                  <span className="font-bold text-left">
                    {getFirstTwoWords(item.name)}
                  </span>
                </div>
                <div className="flex space-x-7">
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

export default QuoteData;
