import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import { PokemonDetail } from './PokemonDetail';

const mockPokemon = {
  id: 1,
  name: 'Bulbasaur',
  types: [
    { type: { name: 'Grass', url: 'someURL' } },
    { type: { name: 'Grass', url: 'someURL' } },
    { type: { name: 'Grass', url: 'someURL' } },
    { type: { name: 'Grass', url: 'someURL' } },
    { type: { name: 'Grass', url: 'someURL' } },
  ],
};

storiesOf('Pokemon Detail', module)
  .addDecorator(withKnobs)
  .add('Mostrar el loading', () => {
    return (
      <PokemonDetail
        loading={true}
      />
    );
  })
  .add('Se pasa un pokemon como argumento', () => {
    return (
      <PokemonDetail
        loading={false}
        pokemon={mockPokemon}
        image={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'}
      />
    );
  })