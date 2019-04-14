import React from 'react';
import { DataTableCell } from '../../..';

import renderer from 'react-test-renderer';

test('DataTableCell Renders', () => {
  const tree = renderer.create(<DataTableCell />).toJSON();
  expect(tree).toMatchSnapshot();
});
