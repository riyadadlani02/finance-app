import axios from "axios";
import { useState, useEffect } from "react";

const useMarketQuotes = () => {
  const apiKey = "2c3b8b1ca3ee4242b91473f8fff6ef8d";
  // const symbol = "SPX,IXIC,DJI,RUT,XAG/USD,GOLD,WTI";
  const symbol = "SPX,IXIC,DJI";
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Symbols | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${apiKey}`;

      try {
        const response = await axios.get<Symbols>(endpoint);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useMarketQuotes;
