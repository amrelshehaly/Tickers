import TickerCard from "./common/tickerCard";
import SearchBar from "./common/SearchBar";
import "./App.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Alert from "./common/Alert";
import useTicker from "./hooks/useTicker";
// import Loading from "./common/loading";
import SplashScreen from "./common/splash";

function App() {

  const { fetchMore, response, loading, reFetchData, error, restResult, setSearch } = useTicker()

  const handleSearch = () => {
    restResult()
  }

  return ( 
    <>
      <SearchBar
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        onSubmit={() => handleSearch()}
      />
      {error && <Alert msg={error?.error} refetch={reFetchData} />}
      {/* {loading && <SplashScreen />} */}
      {response.results && response.results.length > 0 && (
        <InfiniteScroll
          dataLength={response.results.length}
          next={() => fetchMore()}
          hasMore={true}
          loader={loading && <>loading ...</>}
          scrollThreshold={0.8}
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
