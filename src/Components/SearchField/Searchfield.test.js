import React from 'react';
import { SearchField } from '../../src';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('SearchField Renders', () => {
  const tree = renderer.render(<SearchField />);
  expect(tree).toMatchSnapshot();
});
