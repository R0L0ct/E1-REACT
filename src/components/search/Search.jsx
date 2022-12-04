import React, { useState } from "react";
import { ButtonStyled, InputStyled, SearchFormStyled } from "./SearchStyles";
import {FiSearch} from "react-icons/fi"
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';

export const Search = ({ handleSubmit }) => {
  const [pokemon, setPokemon] = useState("");

  return (
    <SearchFormStyled
      onSubmit={(e) => {
        e.preventDefault();
				handleSubmit(e, pokemon)
      }}
    >
		<CatchingPokemonTwoToneIcon fontSize="large"/>
      <InputStyled
        placeholder="Buscar"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />

      <ButtonStyled disabled={!pokemon} type="submit">
        <FiSearch size={30} />
      </ButtonStyled>
    </SearchFormStyled>
  );
};
