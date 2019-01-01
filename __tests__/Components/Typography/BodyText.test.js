import React from 'react';
import BodyText from '../../../src/Components/Typography/BodyText';

import renderer from 'react-test-renderer';

test('it renders BodyText One', () => {
  const tree = renderer.create(<BodyText type={1}>BodyText</BodyText>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders BodyText Two', () => {
  const tree = renderer.create(<BodyText type={2}>BodyText</BodyText>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders BodyText One when a value isnt 1 or 2', () => {
  const tree = renderer.create(<BodyText type={3}>BodyText</BodyText>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders BodyText One with other props', () => {
  const tree = renderer
    .create(
      <BodyText type={3} align="center" gutterBottom={true}>
        BodyText
      </BodyText>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
