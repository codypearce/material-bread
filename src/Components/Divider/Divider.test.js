import React from 'react';
import { Divider } from '../../';

import renderer from 'react-test-renderer';

test('Divider Renders', () => {
  const tree = renderer.create(<Divider />).toJSON();
  expect(tree).toMatchSnapshot();
});
