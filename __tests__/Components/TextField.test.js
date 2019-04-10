import React from 'react';
import { TextField } from '../../src';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('TextField Renders', () => {
  const tree = renderer.render(<TextField />);
  expect(tree).toMatchSnapshot();
});
