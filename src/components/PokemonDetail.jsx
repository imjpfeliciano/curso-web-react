import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonCardContainer, PokemonName, PokemonImage } from './Pokemon.styled';
import styled from 'styled-components';
import { getPokemonImage } from '../utils/pokemonUtils';
import TypeChip from './PokemonTypeChip';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const PokemonDetailContainer = styled.div`
`;

const renderTypes = ({ types }) => {
  return types
  ? types.map(pokemonType => {
    return <TypeChip key={pokemonType.type.name} name={pokemonType.type.name} />
  })
  : null;
}

const PokemonDetail = ({ loading, pokemon, image }) => {
  return (
    <PokemonDetailContainer>
      { loading && <span>loading ...</span>}
      { !loading && pokemon && (
          <PokemonCardContainer>
            <PokemonImage src={image} />
            <PokemonName>{pokemon.id}: {pokemon.name}</PokemonName>
            { pokemon && pokemon.types ? renderTypes({ types: pokemon.types }) : null }
          </PokemonCardContainer>
        )
      }
    </PokemonDetailContainer>
  );
};

const PokemonDetailWrapper = () => {
  const { id } = useParams();
  // TODO: validar que sea un numero correcto (intervalo de pokemons)

  const [pokemon, setPokemon] = useState(null);
  const [pokemonId] = useState(Number(id));
  const [loading, setLoading] = useState(true);

  const pokemonImage = getPokemonImage(id);

  useEffect(() => {
    fetch(`${BASE_URL}/${pokemonId}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
  }, [])

  return (
    <PokemonDetail loading={loading} pokemon={pokemon} image={pokemonImage} />
  )
}

export default PokemonDetailWrapper;
export {
  PokemonDetail,
};
