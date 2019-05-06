import React from 'react';
import { Select } from '../../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('SelectFilled Renders', () => {
  const tree = renderer.render(<Select type="filled" />);
  expect(tree).toMatchSnapshot();
});
