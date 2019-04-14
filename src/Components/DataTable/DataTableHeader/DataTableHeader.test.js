import React from 'react';
import { DataTableHeader } from '../../../';

import renderer from 'react-test-renderer';

test('DataTableHeader Renders', () => {
  const tree = renderer.create(<DataTableHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
