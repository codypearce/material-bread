import React from 'react';
import Overline from '../../../src/Components/Typography/Overline';

import renderer from 'react-test-renderer';

test('it renders Overline', () => {
  const tree = renderer.create(<Overline>Overline</Overline>).toJSON();
  expect(tree).toMatchSnapshot();
});
