import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { CreateForm } from './createForm';
import '../../../assets/main.css';

storiesOf('Twitter', module)
  .addDecorator(withKnobs)
  .add('Create Form', () => {
    return (
      <CreateForm
      />);
  });