import React from 'react';
import { Snackbar } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Snackbar Renders', () => {
  const tree = renderer.render(<Snackbar />);
  expect(tree).toMatchSnapshot();
});
