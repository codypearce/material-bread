import React from 'react';
import BottomNavigationItem from './BottomNavigationItem';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('BottomNavigationItem Renders', () => {
  const tree = renderer.render(<BottomNavigationItem />);
  expect(tree).toMatchSnapshot();
});
