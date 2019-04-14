import React from 'react';
import { DialogTitle } from '../../../';

import renderer from 'react-test-renderer';

test('DialogTitle Renders', () => {
  const tree = renderer.create(<DialogTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
