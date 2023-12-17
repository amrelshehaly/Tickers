import { useEffect, useState } from "react";
import { getTickers } from "../api/tickers";
import { useStore } from "../context/store";
import { ErrorProps } from "../api/types";

const useTicker = () => {

    const [ error, setError ] = useState<ErrorProps| undefined>(undefined)
    const [ loading, setLoading ] = useState<boolean>(true)
    const { response, setResults, clearResults } = useStore();
    const [ search, setSearch ] = useState<string>('')

  const url = response.next_url || "https://api.polygon.io/v3/reference/tickers?active=true&limit=20";

  /**
   * @function  This function fetches new tickers and concat it with the previous ticlers already loaded
   */
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
      setError({
        error: "Something went wrong, please check your internet connection",
        status: "Error"
      })
      setLoading(false)
    }
  };

  /**
   *  @function This function is fired when screen reached scrollthreshold
   */
  const fetchMore = () => {
    if (response.status === "OK") {
      fetchData();
    }
  };

  /**
   *  @function This function help user to refetch the tickers if an error occurs
   */
  const reFetchData = () => {
    setError(undefined)
    fetchData()
  }

    /**
   *  @function  This function clears any stored tickers or response from the already fteched tickers
   */
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