import React from 'react';
import { Icon } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Icon Renders', () => {
  const tree = renderer.render(<Icon />);
  expect(tree).toMatchSnapshot();
});
