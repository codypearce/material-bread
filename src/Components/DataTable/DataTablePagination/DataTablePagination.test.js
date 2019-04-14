import React from 'react';
import { DataTablePagination } from '../../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('DataTablePagination Renders', () => {
  const tree = renderer.render(<DataTablePagination />);
  expect(tree).toMatchSnapshot();
});
