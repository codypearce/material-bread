import React from 'react';
import HeadingOne from '../../../src/Components/Typography/HeadingOne';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HeadingOne />).toJSON();
  expect(tree).toMatchSnapshot();
});
