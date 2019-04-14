import React from 'react';
import CardHeader from './CardHeader';

import renderer from 'react-test-renderer';

test('CardHeader Renders', () => {
  const tree = renderer.create(<CardHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
