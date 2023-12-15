import TickerCard from "./common/tickerCard";
import SearchBar from "./common/SearchBar";
import "./App.scss"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar onChange={(e) => { console.log(e) }} />
      <div className="container">
        <div className="item">
          <TickerCard companyName="Apple Inc." name="APPL" />
        </div>
        <div className="item">
          <TickerCard companyName="Apple Inc." name="APPL" />
        </div>
        <div className="item"> 
          <TickerCard companyName="Apple Inc." name="APPL" />
        </div>
        <div className="item">
          <TickerCard companyName="Apple Inc." name="APPL" />
        </div>
        <div className="item"> 
          <TickerCard companyName="Apple Inc." name="APPL" />
        </div>
      </div>
    </>
  );
}

export default App;
