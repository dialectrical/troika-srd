import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Link } from "react-router-dom";
import sanityClient from "../client.js";
import { StyledDrawer, StyledDrawerPaper } from "./styles/StyledDrawer";
import { StyledTroika } from "./styles/StyledTroika";
import { StyledNavText } from "./styles/StyledNavText";
import Divider from "@material-ui/core/Divider";

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
                  tag="h5"
                  to={"/" + post.slug.current}
                  key={post.slug.current}
                >
                  {post.number}. {post.title}
                </Link>
              </Switch>
            );
          })}
      </HashRouter>
    </StyledDrawer>
  );
};

export default Nav;
