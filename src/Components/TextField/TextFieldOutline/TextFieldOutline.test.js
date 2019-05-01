import React from 'react';
import TextFieldOutline from './TextFieldOutline';

import renderer from 'react-test-renderer';

test('TextFieldOutline Renders', () => {
  const tree = renderer.create(<TextFieldOutline />).toJSON();
  expect(tree).toMatchSnapshot();
});
