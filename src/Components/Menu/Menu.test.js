import React from 'react';
import { Menu } from '../../../src';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Menu Renders', () => {
  const tree = renderer.render(<Menu />);
  expect(tree).toMatchSnapshot();
});
