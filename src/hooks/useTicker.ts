import { useEffect, useState } from "react";
import { getTickers } from "../api/tickers";
import { useStore } from "../context/store";
import { ErrorProps } from "../api/types";

// type tickeHookProps = {

// }

/**
 * 
 * @returns This Hook return the Response from the getTicker API, loading state and if errorFound. 
 *          Also you can call fetchMore to load more data.
 * @
 */

const useTicker = () => {

    const [ error, setError ] = useState<ErrorProps| undefined>(undefined)
    const [ loading, setLoading ] = useState<boolean>(true)
    const { response, setResults, clearResults } = useStore();
    const [ search, setSearch ] = useState<string>('')



  const url = response.next_url || "https://api.polygon.io/v3/reference/tickers?active=true&limit=20";

  const fetchData = async () => {
    setLoading(true)
    try {
        const output = await getTickers(url, search);
        if(output.status === 'OK'){
           setResults({
                ...output,
                results: [... response.results, ...output.results]
            });
        }else{
            setError({
                error: output.error || 'Exceeded Request, please try again later',
                status: output.status
            })
        }
        setLoading(false)
    } catch (error) {
        console.log("ERROR", error);
    }
  };

  const fetchMore = () => {
    if (response.status === "OK") {
      fetchData();
    }
  };

  const reFetchData = () => {
    setError(undefined)
    fetchData()
  }

  const restResult =  () => {
    clearResults()
  }

  useEffect(() => {
    if(response.next_url === ''){
        fetchData();
    }
  }, [response.next_url]);


  return {
    response,
    fetchMore,
    reFetchData,
    error,
    loading,
    fetchData,
    setSearch,
    restResult
  }

};


export default useTicker