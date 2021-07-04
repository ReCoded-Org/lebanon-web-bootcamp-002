import Navi from "./Components/Navi";
import NoWallet from "./Components/NoWallet";
import LightBox from "./Components/LightBox";
import WalletJ from "./Components/WalletJ";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navi />
      <Switch>
        <Route path="/wallet/:name" component={WalletJ} />

        <Route path="/walletform">
          <LightBox />
        </Route>
        <Route path="/" exact>
          <NoWallet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
