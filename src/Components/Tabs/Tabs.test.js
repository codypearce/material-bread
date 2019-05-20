import React from 'react';
import { Tabs } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Tabs Renders', () => {
  const tree = renderer.render(<Tabs />);
  expect(tree).toMatchSnapshot();
});
