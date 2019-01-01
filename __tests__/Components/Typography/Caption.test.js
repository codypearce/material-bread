import React from 'react';
import Caption from '../../../src/Components/Typography/Caption';

import renderer from 'react-test-renderer';

test('it renders Caption', () => {
  const tree = renderer.create(<Caption>Caption</Caption>).toJSON();
  expect(tree).toMatchSnapshot();
});
