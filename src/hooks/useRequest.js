import { useEffect, useState } from "react";

const useRequest = (initialRequestPromise) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const request = async (requestPromise) => {
    setIsFetching(true);
    try {
      const response = await requestPromise;
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (initialRequestPromise) {
      request(initialRequestPromise);
    }
  }, []);

  return { data, error, isFetching, request };
};

export default useRequest;
