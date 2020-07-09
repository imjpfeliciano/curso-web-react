import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './button';
import '../../../assets/main.css';

storiesOf('UI|Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    return (
      <Button
        label={text('Etiqueta', "Click Me")}
        onClick={action('Se ha clickeado el boton')}
      />);
  });