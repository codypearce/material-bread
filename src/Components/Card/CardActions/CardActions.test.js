import React from 'react';
import CardActions from './CardActions';

import renderer from 'react-test-renderer';

test('CardActions Renders', () => {
  const tree = renderer.create(<CardActions />).toJSON();
  expect(tree).toMatchSnapshot();
});
