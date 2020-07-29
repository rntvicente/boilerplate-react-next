import { withKnobs, text } from '@storybook/addon-knobs';
import Chance from 'chance';

import Main from '.';

const chance = new Chance();

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
};

export const Basic = () => (
  <Main
    title={text('title', chance.sentence())}
    description={text('description', chance.sentence())}
  />
);
