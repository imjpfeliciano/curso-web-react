import React, { useState, useEffect } from 'react';
import Button from './button';
import PokemonCard from './PokemonCard';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

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

        setPokemonList(results);
        setLoading(false);
      })
  }, [])

  const renderPokemons = () => {
    return pokemonList.map(pokemon => (
      <PokemonCard
        key={pokemon.url}
        name={pokemon.name}
        url={pokemon.url}
      />
    ))
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
