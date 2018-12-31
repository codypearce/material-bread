import React from 'react';
import HeadingFour from '../../../src/Components/Typography/HeadingFour';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HeadingFour />).toJSON();
  expect(tree).toMatchSnapshot();
});
