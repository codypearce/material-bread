import React from 'react';
import CardContent from './CardContent';

import renderer from 'react-test-renderer';

test('CardContent Renders', () => {
  const tree = renderer.create(<CardContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
