import ColorMode from "../colorMode/ColorMode";
import { LinkItem } from "../linkItem/LinkItem";
import { LinkContainerStyled, NavbarContainerStyled } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <LinkContainerStyled>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/poke-api">Poke-Api</LinkItem>
        <LinkItem to="/todo"> Todo-List</LinkItem>
      </LinkContainerStyled>
		<ColorMode />
    </NavbarContainerStyled>
  );
};

export default Navbar;
