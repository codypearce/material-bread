import React from 'react';
import HeadingSix from '../../../src/Components/Typography/HeadingSix';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HeadingSix />).toJSON();
  expect(tree).toMatchSnapshot();
});
