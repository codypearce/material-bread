import React from 'react';
import { Searchfield } from '../../..';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('SearchField Renders', () => {
  const tree = renderer.render(<Searchfield />);
  expect(tree).toMatchSnapshot();
});
