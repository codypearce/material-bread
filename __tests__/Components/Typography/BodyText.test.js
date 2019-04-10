import React from 'react';
import { BodyText } from '../../../src';

import renderer from 'react-test-renderer';

test('BodyText Renders', () => {
  const tree = renderer.create(<BodyText />).toJSON();
  expect(tree).toMatchSnapshot();
});
