import React from 'react';
import { Overline } from '../../../src';

import renderer from 'react-test-renderer';

test('Overline Renders', () => {
  const tree = renderer.create(<Overline />).toJSON();
  expect(tree).toMatchSnapshot();
});
