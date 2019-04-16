import React from 'react';
import { View } from 'react-native';
import { Hoverable } from '../../';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('Switch Renders', () => {
  const tree = renderer.render(
    <Hoverable>
      <View />
    </Hoverable>,
  );
  expect(tree).toMatchSnapshot();
});
