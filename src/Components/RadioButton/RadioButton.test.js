import React from 'react';
import { RadioButton } from '../../src';

import renderer from 'react-test-renderer';

test('RadioButton Renders', () => {
  const tree = renderer.create(<RadioButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
