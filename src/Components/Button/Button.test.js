import React from 'react';
import Button from './Button';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Button Renders', () => {
  const tree = renderer.render(<Button />);
  expect(tree).toMatchSnapshot();
});
