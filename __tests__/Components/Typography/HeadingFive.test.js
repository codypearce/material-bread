import React from 'react';
import HeadingFive from '../../../src/Components/Typography/HeadingFive';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HeadingFive />).toJSON();
  expect(tree).toMatchSnapshot();
});
