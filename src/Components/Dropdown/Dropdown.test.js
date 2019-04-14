import React from 'react';
import { Dropdown } from '../../src';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Dropdown Renders', () => {
  const tree = renderer.render(<Dropdown />);
  expect(tree).toMatchSnapshot();
});
