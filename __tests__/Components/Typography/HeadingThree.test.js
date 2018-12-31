import React from 'react';
import HeadingThree from '../../../src/Components/Typography/HeadingThree';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HeadingThree />).toJSON();
  expect(tree).toMatchSnapshot();
});
