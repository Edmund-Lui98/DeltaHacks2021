import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./themes/theme";
import LandingPage from "./pages/Landing";
import login from "./pages/login";
import Timer from "./pages/Timer";

import "./App.css";
import SignUp from "./pages/signup";


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={login} exact={true}/>
        <Route path="/main" component={Timer} />
        <Route path='/signup' component={SignUp} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
