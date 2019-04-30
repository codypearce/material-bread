import React from 'react';
import { ListSection } from '../../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('ListExpanded Renders', () => {
  const tree = renderer.render(<ListSection />);
  expect(tree).toMatchSnapshot();
});
