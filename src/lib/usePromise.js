import { useEffect, useState } from 'react';

export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const response = await promiseCreator();
        setResponse(response);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { loading, response, error };
}
