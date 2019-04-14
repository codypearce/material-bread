import React from 'react';
import { DialogContentText } from '../../../src';

import renderer from 'react-test-renderer';

test('DialogContentText Renders', () => {
  const tree = renderer.create(<DialogContentText />).toJSON();
  expect(tree).toMatchSnapshot();
});
