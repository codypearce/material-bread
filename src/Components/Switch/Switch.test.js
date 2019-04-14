import React from 'react';
import { Switch } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Switch Renders', () => {
  const tree = renderer.render(<Switch />);
  expect(tree).toMatchSnapshot();
});
