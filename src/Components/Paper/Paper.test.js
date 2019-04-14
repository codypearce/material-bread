import React from 'react';
import { Paper } from '../../';

import renderer from 'react-test-renderer';

test('Paper Renders', () => {
  const tree = renderer.create(<Paper />).toJSON();
  expect(tree).toMatchSnapshot();
});
