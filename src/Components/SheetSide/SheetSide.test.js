import React from 'react';
import { SheetSide } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('SheetSide Renders', () => {
  const tree = renderer.render(<SheetSide />);
  expect(tree).toMatchSnapshot();
});
