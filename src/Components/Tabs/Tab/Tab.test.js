import React from 'react';
import { Tab } from '../../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Tab Renders', () => {
  const tree = renderer.render(<Tab />);
  expect(tree).toMatchSnapshot();
});
