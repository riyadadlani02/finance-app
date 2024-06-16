import React from "react";
import NewsHeadline from "./headline";
import NewsSentiment from "./sentiment";
import useNews from "@/lib/hooks/useNews";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Props {
  newsSentiment: NewsSentimentData | null;
}

const NewsCard = ({ newsSentiment }: Props) => {
  const { currentHeadline, sentimentColor, sentimentText, arrowIcon } =
    useNews(newsSentiment);

  return (
    <Card className="lg-md:w-[45%] p-2 flex justify-between flex-col max-lg-md:space-y-5">
      <CardHeader className="flex flex-row space-y-0 space-x-2">
        <NewsSentiment
          arrowIcon={arrowIcon}
          sentimentColor={sentimentColor}
          sentimentText={sentimentText}
        />
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <NewsHeadline currentHeadline={currentHeadline} />
      </CardContent>
    </Card>
  );
};

export default NewsCard;
