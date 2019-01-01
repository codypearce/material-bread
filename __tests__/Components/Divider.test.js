import React from 'react';
import Divider from '../../src/Components/Divider';

import renderer from 'react-test-renderer';

test('it renders Divider', () => {
  const tree = renderer.create(<Divider />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders Divider with marginVertical', () => {
  const tree = renderer.create(<Divider marginVertical={16} />).toJSON();
  expect(tree).toMatchSnapshot();
});
