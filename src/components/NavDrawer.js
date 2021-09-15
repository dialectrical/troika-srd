import React, { useState, useEffect } from "react";
import { HashRouter, Switch } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import sanityClient from "../client.js";
import { StyledDrawer, StyledDrawerPaper } from "./styles/StyledDrawer";
import { StyledTroika } from "./styles/StyledTroika";
import { StyledNavText } from "./styles/StyledNavText";
import { StyledAppBar } from "./styles/StyledAppBar";
import { StyledLink } from "./styles/StyledLink";
import GithubCorner from "react-github-corner";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

export const Nav = () => {
  const [allPostsData, setAllPosts] = useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        number,
        title,
        slug
      }`
      )
      .then(data =>
        setAllPosts(
          data.sort(function(a, b) {
            return a.number - b.number;
          })
        )
      );
  });

  if (!allPostsData) {
    return (
      <StyledDrawer
        variant="permanent"
        anchor="left"
        PaperProps={{ component: StyledDrawerPaper }}
      >
        <StyledTroika variant="h1">TROIKA!</StyledTroika>
        <StyledTroika variant="h2">SRD</StyledTroika>
        <Divider />
        <StyledNavText variant="h5">Loading...</StyledNavText>
      </StyledDrawer>
    );
  }

  return (
    <nav>
      <Hidden lgUp implementation="css">
        <StyledAppBar position="fixed">
          <Toolbar>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Link href="/" underline="none">
              <StyledTroika variant="h2" nowrap>
                TROIKA! SRD
              </StyledTroika>
            </Link>
            <GithubCorner
              href="https://github.com/dialectrical/troika-srd"
              direction="right"
              octoColor="#f1518d"
              bannerColor="#0fdbf2"
              size="60"
            />
          </Toolbar>
        </StyledAppBar>
        <Toolbar style={{ marginBottom: "10px" }} />
        <StyledDrawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          paperProps={{ component: StyledDrawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <StyledDrawerPaper>
            <HashRouter>
              {allPostsData &&
                allPostsData.map((post, index) => {
                  return (
                    <Switch>
                      <StyledLink
                        component={RouterLink}
                        tag="h5"
                        to={"/" + post.slug.current}
                        key={post.slug.current}
                      >
                        <StyledNavText>
                          {post.number}. {post.title}{" "}
                        </StyledNavText>
                      </StyledLink>
                    </Switch>
                  );
                })}
            </HashRouter>
          </StyledDrawerPaper>
        </StyledDrawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <StyledDrawer
          variant="permanent"
          open
          anchor="left"
          PaperProps={{ component: StyledDrawerPaper }}
        >
          <GithubCorner
            href="https://github.com/dialectrical/troika-srd"
            direction="left"
            octoColor="#f1518d"
            bannerColor="#0fdbf2"
          />
          <Link href="/" underline="none">
            <StyledTroika variant="h1">TROIKA!</StyledTroika>
            <StyledTroika variant="h2">SRD</StyledTroika>
          </Link>
          <Divider />
          <HashRouter>
            {allPostsData &&
              allPostsData.map((post, index) => {
                return (
                  <Switch>
                    <StyledLink
                      component={RouterLink}
                      tag="h5"
                      to={"/" + post.slug.current}
                      key={post.slug.current}
                    >
                      <StyledNavText>
                        {post.number}. {post.title}{" "}
                      </StyledNavText>
                    </StyledLink>
                  </Switch>
                );
              })}
          </HashRouter>
        </StyledDrawer>
      </Hidden>
    </nav>
  );
};

export default Nav;
