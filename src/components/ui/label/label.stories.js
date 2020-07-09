import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Label from './label';
import '../../../assets/main.css';

// TODO: Validar que storybook detecte las interfaces de cada componente

storiesOf('UI|Label', module)
  .addDecorator(withKnobs)
  .add('Label', () => {
    return (
      <Label
        label={text('Etiqueta', "Label default")}
        onClick={() => {}}
      />);
  });
