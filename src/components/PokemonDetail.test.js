import React from 'react';
import { PokemonDetail } from './PokemonDetail';
import { PokemonName, PokemonImage } from './Pokemon.styled';

import { mount, shallow } from 'enzyme';

const props = {
  loading: true,
  pokemon: {
    id: 1,
    name: 'Bulbasaur',
    types: [
      { type: { name: 'Grass' } },
    ]
  },
  imagen: 'someURL',
};

describe('Pokemon Detail', () => {
  it('render sin problemas', () => {
    const wrapper = mount(<PokemonDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('muestra el mensaje de cargando', () => {
    const wrapper = shallow(<PokemonDetail {...props} />);
    expect(wrapper.find('.p-loader')).toHaveLength(1);
  });

  it('muestra la informacion del pokemon', () => {
    const mockProps = {
      ...props,
      loading: false,
    };

    const wrapper = shallow(<PokemonDetail {...mockProps} />);
    expect(wrapper.find(PokemonImage)).toHaveLength(1);
    expect(wrapper.find(PokemonName)).toHaveLength(1);
  });
});