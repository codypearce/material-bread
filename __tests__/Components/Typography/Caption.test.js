import React from 'react';
import { Caption } from '../../../src';

import renderer from 'react-test-renderer';

test('Caption Renders', () => {
  const tree = renderer.create(<Caption />).toJSON();
  expect(tree).toMatchSnapshot();
});
