import React from 'react';
import { Checkbox } from '../../src';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Checkbox Renders', () => {
  const tree = renderer.render(<Checkbox />);
  expect(tree).toMatchSnapshot();
});
