import React from 'react';
import TextFieldFlat from './TextFieldFlat';

import renderer from 'react-test-renderer';

test('TextFieldFlat Renders', () => {
  const tree = renderer.create(<TextFieldFlat />).toJSON();
  expect(tree).toMatchSnapshot();
});
