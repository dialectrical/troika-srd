import Drawer from "@material-ui/core/Drawer";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

export const StyledDrawer = styled(Drawer)`
  width: 40vw;
  text-align: left;
`;

export const StyledDrawerPaper = styled(Paper)`
  width: 40vw;
  padding-left: 20vw;
  background-color: #f1518d;
  border-radius: 0px;
  @media (max-width: 1600px) {
    height: 100vh;
    padding-left: 10vw;
  }
`;
