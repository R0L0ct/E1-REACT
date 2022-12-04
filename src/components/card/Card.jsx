import { Image } from "@chakra-ui/react";
import React from "react";
import {
  CardContainerStyled,
  CardTextContentContainerStyled,
  CardTypeContainerStyled,
} from "./CardStyles";

const Card = (props) => {
  const { name, sprites, types } = props;
  return (
    <CardContainerStyled>
      <Image
        src={sprites?.other.home.front_default}
        alt={name}
        boxSize="300px"
      />

      <CardTextContentContainerStyled>
        <h2>{name}</h2>
      </CardTextContentContainerStyled>

      <CardTypeContainerStyled>
		{types?.map(type => (
			<h3>{type.type.name}</h3>
		))}
      </CardTypeContainerStyled>
    </CardContainerStyled>
  );
};

export default Card;
