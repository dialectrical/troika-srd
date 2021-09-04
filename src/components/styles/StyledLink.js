import styled from "styled-components";
import Link from "@material-ui/core/link";

export const StyledLink = styled(Link)`
  color: #0fdbf2;
  font-weight: bold;
  transition: color 0.4s;
  &:hover {
    color: #f21b7f;
  }
`;
