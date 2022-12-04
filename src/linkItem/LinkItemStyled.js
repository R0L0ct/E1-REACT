import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkItemStyled = styled(NavLink)`
font-size: 18px;
text-decoration: none;

&.active {
color: purple;
}
`;
