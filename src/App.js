import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import TopBanner from "./components/TopBanner";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import Footer from "./components/Footer";
//import ServicesPage from "./pages/ServicesPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#546e7a",
      light: "#819ca9",
      dark: "#29434e",
      contrastText:"#ffffff"
    },
  },
  typography:{
    fontFamily:[
      "Manrope",
      "sans-serif",
    ].join(',')
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
          <TopBanner />
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/portfolio">
              <PortfolioPage />
            </Route>
          </Switch>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
