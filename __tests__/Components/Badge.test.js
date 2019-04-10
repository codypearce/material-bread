import React from 'react';
import { Badge } from '../../src';

import renderer from 'react-test-renderer';

test('Badge Renders', () => {
  const tree = renderer.create(<Badge />).toJSON();
  expect(tree).toMatchSnapshot();
});
