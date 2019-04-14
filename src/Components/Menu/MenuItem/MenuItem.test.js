import React from 'react';
import { MenuItem } from '../../../';

import renderer from 'react-test-renderer';

test('MenuItem Renders', () => {
  const tree = renderer.create(<MenuItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
