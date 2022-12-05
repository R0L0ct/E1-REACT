import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import styled from "styled-components";
import { Contexto } from "./Context";


const LinkTitle = styled.h3`
  color: ${(props) => props.color};
`;

export const Reducer = () => {
  const { colorRed, colorBlue } = useContext(Contexto);

  useEffect(() => {
    let localData = localStorage.getItem("tasks");
    let data = JSON.parse(localData);
    data.length ? dispatch({ type: "rojo" }) : dispatch({ type: "azul" });
  }, []);

  const efecto = () => {
    let localData = localStorage.getItem("tasks");
    let data = JSON.parse(localData);
    data.length ? dispatch({ type: "rojo" }) : dispatch({ type: "azul" });
  };

  const initialState = "";

  const reducer = (state, action) => {
    switch (action.type) {
      case "rojo":
        return colorRed;

      case "azul":
        return colorBlue;

      default:
        return state;
    }
  };

  const [color, dispatch] = useReducer(reducer, initialState);

  return (
    <>
        <LinkTitle color={color} onClick={efecto}>Todo-List</LinkTitle>
    </>
  );
};
