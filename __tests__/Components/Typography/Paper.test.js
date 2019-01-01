import React from 'react';
import Paper from '../../../src/Components/Paper';
import Caption from '../../../src/Components/Caption';

import renderer from 'react-test-renderer';

test('it renders Paper', () => {
  const tree = renderer
    .create(
      <Paper elevation={10}>
        <Caption>Caption</Caption>
      </Paper>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders Paper with different elevation', () => {
  const tree = renderer
    .create(
      <Paper elevation={24}>
        <Caption>Caption</Caption>
      </Paper>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders Paper with different border radius', () => {
  const tree = renderer
    .create(
      <Paper radius={8}>
        <Caption>Caption</Caption>
      </Paper>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
