import React from 'react';
import TextFieldLabel from './TextFieldLabel';

import renderer from 'react-test-renderer';

test('TextFieldLabel Renders', () => {
  const tree = renderer.create(<TextFieldLabel />).toJSON();
  expect(tree).toMatchSnapshot();
});
