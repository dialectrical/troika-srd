import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Nav } from "./components/NavDrawer";
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
            <Route component={BackgroundPage} path="/backgrounds/:slug" />
            <Route component={DocPage} path="/:slug" />
          </Switch>
        </HashRouter>
      </Container>
    </CssBaseline>
  );
};

export default App;
