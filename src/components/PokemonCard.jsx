import React from 'react';
import styled from 'styled-components';

const PokemonCardContainer = styled.div`
  display: inline-block;
  margin: 0 auto;
  width: 20%;
  border: 1px solid black;
  padding: 5px;

  img {
    width: 100%;
  }
`;

const PokemonCard = (props) => {
  const { name, url } = props;
  const pokemonId = url.split('/')[6];

  return (
    <PokemonCardContainer>
      <div>{name}</div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} />
    </PokemonCardContainer>
  );
};

export default PokemonCard;
