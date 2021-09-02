import Drawer from "@material-ui/core/Drawer";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

export const StyledDrawer = styled(Drawer)`
  width: 40vw;
  text-align: right;
`;

export const StyledDrawerPaper = styled(Paper)`
  width: 40vw;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0;
  background-color: #f1518d;
  height: theme.spacing(16);
`;
