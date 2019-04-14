import React from 'react';
import { Searchbar } from '../../src';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Searchbar Renders', () => {
  const tree = renderer.render(<Searchbar />);
  expect(tree).toMatchSnapshot();
});
