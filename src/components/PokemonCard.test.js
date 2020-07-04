import React from 'react';
import PokemonCard from './PokemonCard';
import { mount, shallow } from 'enzyme';
import { sanitizePokemonId } from '../utils/pokemonUtils';
import { PokemonName, PokemonImage } from './Pokemon.styled';

const name = 'Bulbasaur';
const url = 'https://pokeapi.co/api/v2/pokemon/1';

let pokemonId = Number(url.split('/')[6]);
pokemonId = sanitizePokemonId(pokemonId);

describe('Pokemon Card', () => {
  it('render sin problemas', () => {
    const wrapper = shallow(<PokemonCard name={name} url={url} />);
    expect(wrapper).toMatchSnapshot();  
  });

  it('muestra el componente de nombre', () => {
    const wrapper = shallow(<PokemonCard name={name} url={url} />);
    expect(wrapper.find(PokemonName)).toHaveLength(1);
  });

  it('muestra el componente de imagen', () => {
    const wrapper = shallow(<PokemonCard name={name} url={url} />);
    expect(wrapper.find(PokemonImage)).toHaveLength(1);
  });
})