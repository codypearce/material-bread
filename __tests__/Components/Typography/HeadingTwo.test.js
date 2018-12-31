import React from 'react';
import HeadingTwo from '../../../src/Components/Typography/HeadingTwo';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HeadingTwo />).toJSON();
  expect(tree).toMatchSnapshot();
});
