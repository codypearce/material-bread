import React from 'react';
import { Backdrop } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Backdrop Renders', () => {
  const tree = renderer.render(<Backdrop />);
  expect(tree).toMatchSnapshot();
});
