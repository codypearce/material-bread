import React from 'react';
import BaseText from '../../../src/Components/Typography/BaseText';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<BaseText />).toJSON();
  expect(tree).toMatchSnapshot();
});
