import React from 'react';
import { sanitizePokemonId, getPokemonImage } from '../utils/pokemonUtils';
import { PokemonCardContainer, PokemonName, PokemonImage } from './Pokemon.styled';
import { Link } from 'react-router-dom';

const PokemonCard = (props) => {
  const { name, url } = props;
  let pokemonId = Number(url.split('/')[6]);
  pokemonId = sanitizePokemonId(pokemonId); // 3 digitos

  return (
    <Link to={`/pokemon/${pokemonId}`}>
      <PokemonCardContainer>
        <PokemonImage src={getPokemonImage(pokemonId)} />
        <PokemonName>{pokemonId}: {name}</PokemonName>
      </PokemonCardContainer>
    </Link>
  );
};

export default PokemonCard;
