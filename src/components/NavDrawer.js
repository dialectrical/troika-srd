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
        title,
        slug
      }`
      )
      .then(data => setAllPosts(data));
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
        <Switch>
          <Link to={"/character-creation"} key={"/character-creation"}>
            <StyledNavText variant="h4">Character Creation</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/rolling-the-dice"} key={"/rolling-the-dice"}>
            <StyledNavText variant="h4">Rolling the Dice</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link
            to={"/advnaced-skills-and-spells"}
            key={"/advnaced-skills-and-spells"}
          >
            <StyledNavText variant="h4">Advanced Skills & Spells</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/luck"} key={"/luck"}>
            <StyledNavText variant="h4">Luck</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/stamina"} key={"/stamina"}>
            <StyledNavText variant="h4">Stamina</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/initiative"} key={"/initiative"}>
            <StyledNavText variant="h4">Initiative</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/actions"} key={"/actions"}>
            <StyledNavText variant="h4">Actions</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/other-concerns"} key={"/other-concerns"}>
            <StyledNavText variant="h4">Other Concerns</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/damage"} key={"/damage-concerns"}>
            <StyledNavText variant="h4">Damage</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/armour"} key={"/armour"}>
            <StyledNavText variant="h4">Armour</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/encumberance"} key={"/encumberance"}>
            <StyledNavText variant="h4">Encumberance</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/getting-better"} key={"/getting-better"}>
            <StyledNavText variant="h4">Getting Better</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link
            to={"/advanced-skill-descriptions"}
            key={"/advanced-skill-descriptions"}
          >
            <StyledNavText variant="h4">
              Advanced Skill Descriptions
            </StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/items"} key={"/items"}>
            <StyledNavText variant="h4">Items</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/spells"} key={"/spells"}>
            <StyledNavText variant="h4">Spells</StyledNavText>
          </Link>
        </Switch>
        <Switch>
          <Link to={"/bestiary"} key={"/bestiary"}>
            <StyledNavText variant="h4">Bestiary</StyledNavText>
          </Link>
        </Switch>
      </HashRouter>
    </StyledDrawer>
  );
};

export default Nav;
