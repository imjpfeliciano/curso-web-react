import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text as Text } from '@storybook/addon-knobs';
import TextArea from './textarea';
import '../../../assets/main.css';

// TODO: validar porque no desaparece el texto para mostrar placeholder
storiesOf('UI|TextArea', module)
  .addDecorator(withKnobs)
  .add('TextArea', () => {
    return (
      <TextArea
        placeholder={Text('Placeholder', "Placeholder default")}
        text={Text('Texto', "Texto default")}
      />);
  });