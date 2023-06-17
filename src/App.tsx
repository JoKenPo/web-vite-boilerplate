import "./App.css";
import ReactGA from "react-ga4";
import Rotas from './routes/Routes'
import { BrowserRouter } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import { usePallet } from "./contexts/PalletContext";

function App() {
  const { pallet } = usePallet();

  // ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
  // ReactGA.send({
  //   hitType: "pageview",
  //   page: window.location.pathname + window.location.search,
  // });

  return (
    <>
      <div className="App" >
        <header className="App-header" />
        <BrowserRouter>
          {!pallet ? <></> : <Rotas />}
          {/* <Rotas /> */}
          <LoginButton />
        </BrowserRouter>
      </div>

    </>
  )
}

export default App;
