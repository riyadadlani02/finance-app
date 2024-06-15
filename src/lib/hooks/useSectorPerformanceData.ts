import { useState, useEffect } from "react";
import axios from "axios";
import { SectorPerformance } from "../types";

const useSectorPerformanceData = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<SectorPerformance[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `https://financialmodelingprep.com/api/v3/sectors-performance?apikey=oWKwHXBA6gIZbR8Fdjf1JGSlIdV4xHIp`;

      try {
        const response = await axios.get<SectorPerformance[]>(endpoint);
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

export default useSectorPerformanceData;
