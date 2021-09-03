import React, { useState, useEffect } from "react";
import { HashRouter, Switch } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import sanityClient from "../client.js";
import { StyledDrawer, StyledDrawerPaper } from "./styles/StyledDrawer";
import { StyledTroika } from "./styles/StyledTroika";
import { StyledNavText } from "./styles/StyledNavText";
import Hidden from "@material-ui/core/Hidden";
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
      <Hidden smUp implementation="css">
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <StyledDrawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          paperProps={{ component: StyledDrawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <StyledDrawerPaper>
            <StyledTroika variant="h1">TROIKA!</StyledTroika>
            <StyledTroika variant="h2">SRD</StyledTroika>
            <Divider />
            <HashRouter>
              {allPostsData &&
                allPostsData.map((post, index) => {
                  return (
                    <Switch>
                      <Link
                        component={RouterLink}
                        tag="h5"
                        underline="none"
                        to={"/" + post.slug.current}
                        key={post.slug.current}
                      >
                        <StyledNavText>
                          {post.number}. {post.title}{" "}
                        </StyledNavText>
                      </Link>
                    </Switch>
                  );
                })}
            </HashRouter>
          </StyledDrawerPaper>
        </StyledDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <StyledDrawer
          variant="permanent"
          open
          anchor="left"
          PaperProps={{ component: StyledDrawerPaper }}
        >
          <StyledTroika variant="h1">TROIKA!</StyledTroika>
          <StyledTroika variant="h2">SRD</StyledTroika>
          <Divider />
          <HashRouter>
            {allPostsData &&
              allPostsData.map((post, index) => {
                return (
                  <Switch>
                    <Link
                      component={RouterLink}
                      tag="h5"
                      underline="none"
                      to={"/" + post.slug.current}
                      key={post.slug.current}
                    >
                      <StyledNavText>
                        {post.number}. {post.title}{" "}
                      </StyledNavText>
                    </Link>
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
