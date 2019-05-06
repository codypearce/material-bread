import React from 'react';
import { Select } from '../../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('SelectOutlined Renders', () => {
  const tree = renderer.render(<Select type="outlined" />);
  expect(tree).toMatchSnapshot();
});
