import React from 'react';
import { BottomNavigation } from '../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('BottomNavigation Renders', () => {
  const tree = renderer.render(<BottomNavigation />);
  expect(tree).toMatchSnapshot();
});
