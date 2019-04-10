import React from 'react';
import { Appbar } from '../../src';

import renderer from 'react-test-renderer';

test('Appbar Renders', () => {
  const tree = renderer.create(<Appbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
