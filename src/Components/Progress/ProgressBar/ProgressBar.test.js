import React from 'react';
import { ProgressBar } from '../../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('ProgressBar Renders', () => {
  const tree = renderer.render(<ProgressBar />);
  expect(tree).toMatchSnapshot();
});
