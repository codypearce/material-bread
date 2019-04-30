import React from 'react';
import TextFieldFilled from './TextFieldFilled';

import renderer from 'react-test-renderer';

test('TextFieldFilled Renders', () => {
  const tree = renderer.create(<TextFieldFilled />).toJSON();
  expect(tree).toMatchSnapshot();
});
