import React from 'react';
import { DataTableRow } from '../../..';

import renderer from 'react-test-renderer';

test('DataTableRow Renders', () => {
  const tree = renderer.create(<DataTableRow />).toJSON();
  expect(tree).toMatchSnapshot();
});
