import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import AveriaSansLibre from "../../font/AveriaSansLibre-Regular.ttf";

export const StyledTypography = styled(Typography)`
  font-family: Averia Sans Libre;
  @font-face {
    font-family: "Averia Sans Libre";
    src: url(${AveriaSansLibre}) format("TrueType");
  }
  padding: 10px;
  margin-left: 45vw;
  @media (max-width: 960px) {
    text-align: left;
    margin-left: 0vw;
  }
`;
