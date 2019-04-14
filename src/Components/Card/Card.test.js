import React from 'react';
import { Card } from '../..';

import renderer from 'react-test-renderer';

test('Card Renders', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
