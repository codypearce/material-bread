import React from 'react';
import { Tooltip } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Tooltip Renders', () => {
  const tree = renderer.render(<Tooltip />);
  expect(tree).toMatchSnapshot();
});
