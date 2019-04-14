import React from 'react';
import { ToggleButton } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('ToggleButton Renders', () => {
  const tree = renderer.render(<ToggleButton />);
  expect(tree).toMatchSnapshot();
});
