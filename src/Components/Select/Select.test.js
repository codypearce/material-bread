import React from 'react';
import { Select } from '../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Dropdown Renders', () => {
  const tree = renderer.render(<Select />);
  expect(tree).toMatchSnapshot();
});
