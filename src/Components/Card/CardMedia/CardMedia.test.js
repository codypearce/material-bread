import React from 'react';
import CardMedia from './CardMedia';

import renderer from 'react-test-renderer';

test('CardMedia Renders', () => {
  const tree = renderer.create(<CardMedia />).toJSON();
  expect(tree).toMatchSnapshot();
});
