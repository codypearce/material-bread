import React from 'react';
import { ListExpanded } from '../../../src';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('ListExpanded Renders', () => {
  const tree = renderer.render(<ListExpanded />);
  expect(tree).toMatchSnapshot();
});
