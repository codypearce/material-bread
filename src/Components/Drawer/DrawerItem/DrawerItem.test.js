import React from 'react';
import { DrawerItem } from '../../..';

import renderer from 'react-test-renderer';

test('DrawerItem Renders', () => {
  const tree = renderer.create(<DrawerItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
