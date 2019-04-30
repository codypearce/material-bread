import React from 'react';
import { ListItem } from '../../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('ListExpanded Renders', () => {
  const tree = renderer.render(<ListItem />);
  expect(tree).toMatchSnapshot();
});
