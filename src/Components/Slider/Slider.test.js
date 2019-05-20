import React from 'react';
import { Slider } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Slider Renders', () => {
  const tree = renderer.render(<Slider />);
  expect(tree).toMatchSnapshot();
});
