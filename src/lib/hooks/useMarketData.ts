import axios from "axios";
import { useState, useEffect } from "react";

interface Props {
  timeframe: string | null;
  symbol: string | null;
}

const useMarketData = ({ timeframe, symbol }: Props) => {
  const apiKey = "aea9295746f84b9b82e5445b9574d0ae";

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<FinancialData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${timeframe}&apikey=${apiKey}`;

      try {
        const response = await axios.get<FinancialData>(endpoint);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol, timeframe]);

  return { data, loading, error };
};

export default useMarketData;
