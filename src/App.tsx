// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Grid, Box } from "@mui/material";
import TickerCard from "./common/tickerCard";
// import SearchBar from "./common/SearchBar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Box>
      {/* <SearchBar onChange={(e) => {}} /> */}
      <Grid container spacing={3} sx={{ padding: "0.5em" }}>
        <Grid item xs={6} sm={4} md={3} justifyContent={'center'} display={'flex'}>
          <TickerCard companyName="Apple Inc." name="APPL" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}  justifyContent={'center'} display={'flex'}>
          <TickerCard companyName="Apple Inc." name="APPL" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}  justifyContent={'center'} display={'flex'}>
          <TickerCard companyName="Apple Inc." name="APPL" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}  justifyContent={'center'} display={'flex'}>
          <TickerCard companyName="Apple Inc." name="APPL" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}  justifyContent={'center'} display={'flex'}>
          <TickerCard companyName="Apple Inc." name="APPL" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
