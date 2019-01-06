import React from 'react';
import Button from '../../src/Components/Button';

import renderer from 'react-test-renderer';

test('it renders Button', () => {
  const tree = renderer.create(<Button>Click Me</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders Button fullwidth', () => {
  const tree = renderer
    .create(<Button fullwidth={true}>Click Me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders loading Button', () => {
  const tree = renderer
    .create(<Button loading={true}>Click Me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
