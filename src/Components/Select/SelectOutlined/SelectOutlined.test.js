import React from 'react';
import { SelectOutlined } from '../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('SelectOutlined Renders', () => {
  const tree = renderer.render(<SelectOutlined />);
  expect(tree).toMatchSnapshot();
});
