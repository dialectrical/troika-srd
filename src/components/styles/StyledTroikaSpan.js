import styled from "styled-components";
import Atreyu from "../../font/Atreyu.otf";

export const StyledTroikaSpan = styled.span`
  color: #0fdbf2;
  font-family: Atreyu;
  @font-face {
    font-family: "Atreyu";
    src: url(${Atreyu}) format("OpenType");
  }
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;
