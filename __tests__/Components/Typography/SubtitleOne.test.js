import React from 'react';
import SubtitleOne from '../../../src/Components/Typography/SubtitleOne';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SubtitleOne />).toJSON();
  expect(tree).toMatchSnapshot();
});
