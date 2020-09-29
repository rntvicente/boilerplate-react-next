import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Default = () => <Main
  title={text('Title', 'Boilerplate')}
  description={text('Description', 'ReactJS, NextJS e Stiled Components')}
/>
