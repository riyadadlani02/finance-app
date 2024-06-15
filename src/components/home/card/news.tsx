import React from "react";
import { NewsSentimentData } from "@/lib/types";
import useNewsCardInfo from "@/lib/hooks/useNewsCardInfo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Props {
  newsSentiment: NewsSentimentData | null;
}

const NewsCard = ({ newsSentiment }: Props) => {
  const { currentHeadline, sentimentColor, sentimentText, arrowIcon } =
    useNewsCardInfo(newsSentiment);

  return (
    <Card className="w-[45%] p-2 h-64 flex justify-between flex-col">
      <CardHeader className="flex flex-row space-y-0 space-x-2">
        <div className="flex px-3 bg-dark-gray h-[23px] space-x-3 rounded-full items-center">
          <span className="text-muted-foreground text-xs font-semibold">
            The markets are{" "}
            <span className={`${sentimentColor}`}>{sentimentText}</span>
          </span>
        </div>
        <span className="flex w-[23px] h-[23px] items-center justify-center bg-dark-gray space-x-3 rounded-full">
          {arrowIcon}
        </span>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <span className="text-xs font-medium text-muted-foreground">
          What you need to know today
        </span>
        <h3 className="font-semibold">
          {currentHeadline || "No news available"}
        </h3>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
