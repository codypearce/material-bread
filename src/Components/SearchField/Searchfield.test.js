import React from 'react';
import { SearchField } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('SearchField Renders', () => {
  const tree = renderer.render(<SearchField />);
  expect(tree).toMatchSnapshot();
});
