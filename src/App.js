import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Nav } from "./components/NavDrawer";
import { LandingPage } from "./components/LandingPage";
import { DocPage } from "./components/DocPage";
import { BackgroundPage } from "./components/BackgroundPage";

const App = () => {
  return (
    <CssBaseline>
      <Container>
        <Nav />
      </Container>
      <Container>
        <HashRouter>
          <Switch>
            <Route component={LandingPage} path="/" exact />
            <Route component={BackgroundPage} path="/character-creation" />
            <Route component={DocPage} path="/:slug" />
          </Switch>
        </HashRouter>
      </Container>
    </CssBaseline>
  );
};

export default App;
