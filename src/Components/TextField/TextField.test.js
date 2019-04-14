import React from 'react';
import { TextField } from '../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('TextField Renders', () => {
  const tree = renderer.render(<TextField />);
  expect(tree).toMatchSnapshot();
});
