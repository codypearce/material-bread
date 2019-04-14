import React from 'react';
import { DataTable } from '../../../src';

import renderer from 'react-test-renderer';

test('DataTable Renders', () => {
  const tree = renderer.create(<DataTable />).toJSON();
  expect(tree).toMatchSnapshot();
});
