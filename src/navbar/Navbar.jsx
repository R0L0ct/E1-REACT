import ColorMode from "../colorMode/ColorMode";
import { CtxProvider } from "../components/context/Context";
import { Reducer } from "../components/context/ContextReducer";
import { LinkItem } from "../linkItem/LinkItem";
import { LinkContainerStyled, NavbarContainerStyled } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <LinkContainerStyled>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/poke-api">Poke-Api</LinkItem>
        <LinkItem to="/todo">
          <CtxProvider>
            <Reducer />
          </CtxProvider>
        </LinkItem>
      </LinkContainerStyled>
      <ColorMode />
    </NavbarContainerStyled>
  );
};

export default Navbar;
