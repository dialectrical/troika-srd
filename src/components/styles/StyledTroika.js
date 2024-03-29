import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Atreyu from "../../font/Atreyu.otf";

export const StyledTroika = styled(Typography)`
  color: #0fdbf2;
  font-family: Atreyu;
  @font-face {
    font-family: "Atreyu";
    src: url(${Atreyu}) format("OpenType");
  }
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  @media (max-width: 1040px) {
    font-size 3rem;
    margin-bottom: 5px;
  }
`;
