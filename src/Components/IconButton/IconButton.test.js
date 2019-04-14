import React from 'react';
import { IconButton } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('IconButton Renders', () => {
  const tree = renderer.render(<IconButton />);
  expect(tree).toMatchSnapshot();
});
