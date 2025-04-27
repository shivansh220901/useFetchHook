import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const dataJson = await response.json();
      setData(dataJson);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
