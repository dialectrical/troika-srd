import React, { useState, useEffect } from "react";
import { HashRouter, Switch } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import sanityClient from "../client.js";
import { StyledDrawer, StyledDrawerPaper } from "./styles/StyledDrawer";
import { StyledTroika } from "./styles/StyledTroika";
import { StyledNavText } from "./styles/StyledNavText";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

export const Nav = () => {
  const [allPostsData, setAllPosts] = useState(null);

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

  return (
    <StyledDrawer
      variant="permanent"
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
  );
};

export default Nav;
