import { useEffect, useState } from "react";
import { MoveDownRight, MoveUpRight } from "lucide-react";

const useNews = (newsSentiment: NewsSentimentData | null) => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  useEffect(() => {
    if (
      !newsSentiment ||
      !newsSentiment.feed ||
      newsSentiment.feed.length === 0
    )
      return;

    const interval = setInterval(() => {
      setCurrentHeadlineIndex(
        (prevIndex) => (prevIndex + 1) % newsSentiment.feed.length
      );
    }, 30000);

    return () => clearInterval(interval);
  }, [newsSentiment]);

  const currentHeadline = newsSentiment?.feed?.[currentHeadlineIndex]?.title;
  const overallSentimentLabel =
    newsSentiment?.feed?.[0]?.overall_sentiment_label;

  let sentimentColor = "";
  let sentimentText = "";
  let arrowIcon = null;

  switch (overallSentimentLabel) {
    case "Somewhat-Bullish":
      sentimentColor = "text-green-400";
      sentimentText = "bullish";
      arrowIcon = <MoveUpRight className="text-green-400 w-4" />;
      break;
    case "Somewhat-Bearish":
      sentimentColor = "text-red-500";
      sentimentText = "bearish";
      arrowIcon = <MoveDownRight className="text-red-500 w-4" />;
      break;
    default:
      sentimentColor = "text-gray-500";
      sentimentText = "not available";
      arrowIcon = null;
      break;
  }

  return { currentHeadline, sentimentColor, sentimentText, arrowIcon };
};

export default useNews;
