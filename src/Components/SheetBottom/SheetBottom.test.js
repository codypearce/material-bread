import React from 'react';
import { SheetBottom } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('SheetBottom Renders', () => {
  const tree = renderer.render(<SheetBottom />);
  expect(tree).toMatchSnapshot();
});
