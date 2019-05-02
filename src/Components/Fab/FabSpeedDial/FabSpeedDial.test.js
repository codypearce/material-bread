import React from 'react';
import { FabSpeedDial } from '../../..';
import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();
const actions = [
  {
    text: 'Favorites',
  },
  {
    text: 'Language',
  },
  {
    text: 'Location',
  },
  {
    text: 'Video',
  },
];

test('FabSpeedDial Renders', () => {
  const tree = renderer.render(<FabSpeedDial actions={actions} />);
  expect(tree).toMatchSnapshot();
});
