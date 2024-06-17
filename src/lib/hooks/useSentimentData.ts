import axios from "axios";
import { useState, useEffect } from "react";

const useNewsSentiment = () => {
  const ticker = "AAPL";
  const apiKey = "J0NN7BXV2SAJ9NR4";
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<NewsSentimentData | null>(null);

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
