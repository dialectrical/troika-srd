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
  border-radius: 0;
  background-color: #f1518d;
  height: theme.spacing(16);
`;
