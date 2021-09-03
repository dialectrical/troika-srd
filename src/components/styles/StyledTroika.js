import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const StyledTroika = styled(Typography)`
  color: #0fdbf2;
  @font-face {
    font-family: Atrey;
    src: url(../../font/Atreyu.otf);
  }
  font-family: Atreyu;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  @media (max-width: 960px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;
