import React from 'react';
import Badge from './Badge';

import renderer from 'react-test-renderer';

test('Badge Renders', () => {
  const tree = renderer.create(<Badge />).toJSON();
  expect(tree).toMatchSnapshot();
});
