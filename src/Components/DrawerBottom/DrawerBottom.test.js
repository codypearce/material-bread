import React from 'react';
import { DrawerBottom } from '../../..';

import renderer from 'react-test-renderer';

test('DrawerBottom Renders', () => {
  const tree = renderer.create(<DrawerBottom />).toJSON();
  expect(tree).toMatchSnapshot();
});
