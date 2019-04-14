import React from 'react';
import { Drawer } from '../../..';

import renderer from 'react-test-renderer';

test('Drawer Renders', () => {
  const tree = renderer.create(<Drawer />).toJSON();
  expect(tree).toMatchSnapshot();
});
