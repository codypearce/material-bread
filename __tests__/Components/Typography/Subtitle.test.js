import React from 'react';
import Subtitle from '../../../src/Components/Typography/Subtitle';

import renderer from 'react-test-renderer';

test('it renders Subtitle One', () => {
  const tree = renderer.create(<Subtitle type={1}>Subtitle</Subtitle>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders Subtitle Two', () => {
  const tree = renderer.create(<Subtitle type={2}>Subtitle</Subtitle>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders Subtitle One when a value isnt 1 or 2', () => {
  const tree = renderer.create(<Subtitle type={3}>Subtitle</Subtitle>).toJSON();
  expect(tree).toMatchSnapshot();
});
