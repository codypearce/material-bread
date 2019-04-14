import React from 'react';
import { Subtitle } from '../../../';

import renderer from 'react-test-renderer';

test('Subtitle Renders', () => {
  const tree = renderer.create(<Subtitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
