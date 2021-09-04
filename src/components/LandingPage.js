import React from "react";
import fortle from "../image/fortle.svg";
import { StyledTypography } from "./styles/StyledTypography";
import { StyledTroikaSpan } from "./styles/StyledTroikaSpan";
import { StyledLink } from "./styles/StyledLink";

export const LandingPage = () => {
  return (
    <div>
      <StyledTypography variant="h4">
        A System Reference Document for the{" "}
        <StyledLink href="https://www.troikarpg.com/" underline="none">
          <StyledTroikaSpan>Troika!</StyledTroikaSpan> roleplaying game
        </StyledLink>{" "}
        by Melsonian Art's Council.
      </StyledTypography>
      <StyledTypography>
        This reference document is an adaptation of the freely available{" "}
        <StyledLink
          href="https://docs.google.com/document/d/1haUfSVekt2gNab3V2CrL1Pg_sZ-ZlskphwXmSnGT9aw/"
          underline="none"
        >
          TROIKA! SRD
        </StyledLink>{" "}
        presented here for the first time in glorious HTML and contains
        everything needed to play a complete role-playing game capable of
        handling anything from single sessions to decades long campaigns.
        <img src={fortle} alt="" />
      </StyledTypography>
      <StyledTypography variant="subtitle1">
        This SRD is relased for free as a community project and is not
        affiliated with Melsonian Arts Council. If you'd like to get invovled or
        contact me, visit this project on{" "}
        <StyledLink
          href="https://github.com/dialectrical/troika-srd"
          underline="none"
        >
          GitHub
        </StyledLink>
        ,{" "}
        <StyledLink href="mailto: michael.camele@gmail.com">
          email me
        </StyledLink>
        , or reach out on{" "}
        <StyledLink href="https://twitter.com/dialectrical">Twitter</StyledLink>
        .
      </StyledTypography>
    </div>
  );
};
