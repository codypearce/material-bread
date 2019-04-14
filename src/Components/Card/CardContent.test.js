import React from 'react';
import { CardContent } from '../../../src';

import renderer from 'react-test-renderer';

test('CardContent Renders', () => {
  const tree = renderer.create(<CardContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
