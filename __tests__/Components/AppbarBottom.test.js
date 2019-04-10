import React from 'react';
import { AppbarBottom } from '../../src';

import renderer from 'react-test-renderer';

test('AppbarBottom Renders', () => {
  const tree = renderer.create(<AppbarBottom />).toJSON();
  expect(tree).toMatchSnapshot();
});
