import React from 'react';
import { Select } from '../../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('SelectFlat Renders', () => {
  const tree = renderer.render(<Select type="flat" />);
  expect(tree).toMatchSnapshot();
});
