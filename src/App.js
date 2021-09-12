import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

import TopBanner from './components/TopBanner';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
//import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <div>
      <TopBanner />
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path ="/portfolio">
          <PortfolioPage />
        </Route>
        {/* <Route path="/services">
          <ServicesPage />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
