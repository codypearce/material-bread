import React from 'react';
import { DrawerHeader } from '../../..';

import renderer from 'react-test-renderer';

test('DrawerHeader Renders', () => {
  const tree = renderer.create(<DrawerHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
