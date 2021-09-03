import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import ProximaNW01Reg from "../../font/ProximaNW01Reg.ttf";

export const StyledNavText = styled(Typography)`
  color: #0fdbf2;
  font-family: ProximaNW01-Reg;
  @font-face {
    font-family: "ProximaNW01-Reg";
    src: url(${ProximaNW01Reg}) format("TrueType");
  }
  font-weight: bold;
  padding: 5px;
  transition: color 0.4s;
  &:hover {
    color: #f21b7f;
  }
`;

//TODO: figure out how to handle hover to #f21b7f
