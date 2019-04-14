import React from 'react';
import { Fab } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Fab Renders', () => {
  const tree = renderer.render(<Fab />);
  expect(tree).toMatchSnapshot();
});
