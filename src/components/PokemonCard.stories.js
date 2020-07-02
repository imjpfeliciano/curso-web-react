import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import PokemonCard from './PokemonCard';

storiesOf('Pokemon Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <PokemonCard
        name={text('pokemon name', 'Bulbasaur')}
        url={text('pokemon url', 'https://pokeapi.co/api/v2/pokemon/1')}
      />);
  });