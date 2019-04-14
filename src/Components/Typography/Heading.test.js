import React from 'react';
import { Heading } from '../../../src';

import renderer from 'react-test-renderer';

test('Heading Renders', () => {
  const tree = renderer.create(<Heading />).toJSON();
  expect(tree).toMatchSnapshot();
});
