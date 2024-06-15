import { useState, useEffect } from "react";
import axios from "axios";
import { NewsSentimentData } from "../types";

const useNewsSentiment = () => {
  const [data, setData] = useState<NewsSentimentData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const apiKey = process.env.APP_ALPHA_VANTAGE_API_KEY;
  const ticker = "AAPL";

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${apiKey}`;

      try {
        const response = await axios.get<NewsSentimentData>(endpoint);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ticker, apiKey]);

  return { data, loading, error };
};

export default useNewsSentiment;
