import React from 'react';
import { List } from '../../../src';

import renderer from 'react-test-renderer';

test('List Renders', () => {
  const tree = renderer.create(<List />).toJSON();
  expect(tree).toMatchSnapshot();
});
