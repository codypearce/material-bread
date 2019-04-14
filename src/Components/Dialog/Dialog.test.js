import React from 'react';
import { Dialog } from '../../../src';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Dialog Renders', () => {
  const tree = renderer.render(<Dialog />);
  expect(tree).toMatchSnapshot();
});
