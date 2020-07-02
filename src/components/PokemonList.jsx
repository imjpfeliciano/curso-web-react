import React, { useState, useEffect } from 'react';
import Button from './button';
import PokemonCard from './PokemonCard';
import { Link } from 'react-router-dom';
import { sanitizePokemonId } from '../utils/pokemonUtils';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const updatePokemonSID = ({ name, url }) => {
  let pokemonId = Number(url.split('/')[6]);
  pokemonId = sanitizePokemonId(pokemonId);

  return {
    name,
    url,
    sanitizedId: pokemonId,
  };
}
const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { results } = data;

        setPokemonList(results.map(updatePokemonSID));
        setLoading(false);
      })
  }, [])

  const renderPokemons = () => {
    return pokemonList.map(pokemon => {
      const { url, name, sanitizedId } = pokemon;

      return (
        <Link to={`/pokemon/${sanitizedId}`}>
          <PokemonCard
            key={url}
            name={name}
            url={url}
          />
        </Link>
      );
    });
  };

  return (
    <div>
      <div className="cards-container">
        { loading && <div>Loading ... </div>}
        { !loading && pokemonList.length > 0 && renderPokemons() }
      </div>


      <div className="button-group">
        <Button
          label="Anteriores"
          onClick={() => {}}
        />
        <Button
          label="Siguientes"
          onClick={() => {}}
        />
      </div>
      
    </div>
  );
}

export default PokemonList;
