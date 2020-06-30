// estandariza el identificador del pokemon a 3 digitos
export const sanitizePokemonId = pokemonId => {
  let sanitizedId;

  if (pokemonId < 10) sanitizedId = `00${pokemonId}`;
  else if (pokemonId < 100) sanitizedId = `0${pokemonId}`;
  else sanitizedId = pokemonId;

  return sanitizedId;
}

export const getPokemonImage = pokemonId => {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`;
}
