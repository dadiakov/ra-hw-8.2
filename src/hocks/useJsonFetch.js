import { useEffect, useState } from 'react';

const useJsonFetch = (url, opts) => {
    const [data, setData] = useState('');
    const [hasError, setError] = useState('');
    const [isLoading, setLoading] = useState('');
  
    useEffect(() => {
  
      const fetchData = async () => {
        setLoading(true);
        try {
          const json = await fetch(`${url}${opts}`);
          if (!json.ok) throw new Error(json.statusText)
          const parsedItems = await json.json();
          setData(parsedItems.status)
        } catch (e) {
          setError(e);      
        } finally {
          setLoading(false)
        }        
      }
      fetchData();
    }, [url, opts]);
    return {data, hasError, isLoading}
}

export default useJsonFetch;