import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import TypeChip from './PokemonTypeChip';

const PokemonTypes = ['Grass', 'Poison', 'Flight', 'Electric'];

storiesOf('Pokemon Types', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <TypeChip
        name={select('Type', PokemonTypes, PokemonTypes[0])}
      />
    );
  })