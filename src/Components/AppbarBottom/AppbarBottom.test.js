import React from 'react';
import AppbarBottom from './AppbarBottom';

import renderer from 'react-test-renderer';

test('AppbarBottom Renders', () => {
  const tree = renderer.create(<AppbarBottom />).toJSON();
  expect(tree).toMatchSnapshot();
});
