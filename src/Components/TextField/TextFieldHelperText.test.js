import React from 'react';
import { TextFieldHelperText } from '../../src';

import renderer from 'react-test-renderer';

test('TextFieldHelperText Renders', () => {
  const tree = renderer.create(<TextFieldHelperText />).toJSON();
  expect(tree).toMatchSnapshot();
});
