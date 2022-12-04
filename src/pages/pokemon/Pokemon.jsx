import { Alert, AlertIcon, AlertTitle, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/card/Card";
import { Search } from "../../components/search/Search";

const PokemonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Pokemon = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      const selectedPokemon = pokemon.toLowerCase().trim();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      setData(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <PokemonContainerStyled>
        <Search handleSubmit={handleSubmit} />
        {isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>{error.message}</AlertTitle>
          </Alert>
        )}
        {data && <Card {...data} />}
      </PokemonContainerStyled>
    </>
  );
};
