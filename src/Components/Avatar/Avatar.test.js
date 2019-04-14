import React from 'react';
import Avatar from './Avatar';

import renderer from 'react-test-renderer';

test('Avatar Renders', () => {
  const tree = renderer.create(<Avatar />).toJSON();
  expect(tree).toMatchSnapshot();
});
