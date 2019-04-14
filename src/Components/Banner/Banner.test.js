import React from 'react';
import Banner from './Banner';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Banner Renders', () => {
  const tree = renderer.render(<Banner />);
  expect(tree).toMatchSnapshot();
});
