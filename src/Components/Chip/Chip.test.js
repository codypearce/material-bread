import React from 'react';
import { Chip } from '../..';

import renderer from 'react-test-renderer';

test('Chip Renders', () => {
  const tree = renderer.create(<Chip />).toJSON();
  expect(tree).toMatchSnapshot();
});
