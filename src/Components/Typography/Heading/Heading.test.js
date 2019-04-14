import React from 'react';
import { Heading } from '../../../';

import renderer from 'react-test-renderer';

test('Heading Renders', () => {
  const tree = renderer.create(<Heading />).toJSON();
  expect(tree).toMatchSnapshot();
});
