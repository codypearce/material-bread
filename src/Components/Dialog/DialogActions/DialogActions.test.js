import React from 'react';
import { DialogActions } from '../../../';

import renderer from 'react-test-renderer';

test('DialogActions Renders', () => {
  const tree = renderer.create(<DialogActions />).toJSON();
  expect(tree).toMatchSnapshot();
});
