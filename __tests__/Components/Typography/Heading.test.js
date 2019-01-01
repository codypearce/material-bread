import React from 'react';
import Heading from '../../../src/Components/Typography/Heading';

import renderer from 'react-test-renderer';

test('it renders H1 correctly', () => {
  const tree = renderer.create(<Heading type={1}>Heading</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders H2 correctly', () => {
  const tree = renderer.create(<Heading type={2}>Heading</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders H3 correctly', () => {
  const tree = renderer.create(<Heading type={3}>Heading</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});
test('it renders H4 correctly', () => {
  const tree = renderer.create(<Heading type={4}>Heading</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});
test('it renders H5 correctly', () => {
  const tree = renderer.create(<Heading type={5}>Heading</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});
test('it renders H6 correctly', () => {
  const tree = renderer.create(<Heading type={6}>Heading</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders H1 when a value for anything', () => {
  const tree = renderer.create(<Heading type={0}>Heading</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders H1 when a value for anything', () => {
  const tree = renderer.create(<Heading type={8}>Heading</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});
