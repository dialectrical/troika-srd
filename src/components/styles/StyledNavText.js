import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const StyledNavText = styled(Typography)`
  color: #0fdbf2;
  font-family: Proxima-NW01-Reg;
  font-weight: bold;
  transition: color 0.4s;
  &:hover {
    color: #f21b7f;
  }
`;

//TODO: figure out how to handle hover to #f21b7f
