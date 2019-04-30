import React from 'react';
import { ListExpand } from '../../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('ListExpanded Renders', () => {
  const tree = renderer.render(<ListExpand />);
  expect(tree).toMatchSnapshot();
});
