import React from 'react';
import TextFieldUnderline from './TextFieldUnderline';

import renderer from 'react-test-renderer';

test('TextFieldUnderline Renders', () => {
  const tree = renderer.create(<TextFieldUnderline />).toJSON();
  expect(tree).toMatchSnapshot();
});
