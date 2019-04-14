import React from 'react';
import { DrawerSection } from '../../../src';

import renderer from 'react-test-renderer';

test('DrawerSection Renders', () => {
  const tree = renderer.create(<DrawerSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
