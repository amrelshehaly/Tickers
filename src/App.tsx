import TickerCard from "./common/tickerCard";
import SearchBar from "./common/SearchBar";
import "./App.scss";
import { resultProps, useStore } from "./context/store";
import { useCallback, useEffect } from "react";
import Loading from "./common/loading";
import InfiniteScroll from "react-infinite-scroll-component";

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
  "Content-Type": "application/json",
};

function App() {
  const { response, setResults } = useStore();
  const url =
    response.next_url ||
    "https://api.polygon.io/v3/reference/tickers?active=true&limit=5";

  const fetchData = async () => {
    const response = await fetch(url, {
      headers,
      method: "GET",
    });
    const output: resultProps = await response.json();
    setResults(output);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMore = () => {
    if (response.results.length < 100) {
      fetchData();
    }
  };

  return (
    <>
      <SearchBar
        onChange={(e) => {
          console.log(e);
        }}
      />

      {response.results && response.results.length > 0 && (
        <InfiniteScroll
          dataLength={response.results.length}
          next={() => fetchMore()}
          hasMore={true}
          loader={<>loading ...</>}
        >
          <div className="container">
            {response.results.map((val, key) => (
              <div className="item" key={key}>
                <TickerCard companyName={val.name} name={val.ticker} />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

export default App;
