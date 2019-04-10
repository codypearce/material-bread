import React from 'react';
import { Card } from '../../../src';

import renderer from 'react-test-renderer';

test('Card Renders', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
