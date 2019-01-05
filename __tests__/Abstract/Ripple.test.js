import React from 'react';
import Ripple from '../../src/Abstract/Ripple';
import Caption from '../../src/Components/Typography/Heading';

import renderer from 'react-test-renderer';

test('it renders Ripple', () => {
  const tree = renderer
    .create(
      <Ripple rippleColor={'blue'}>
        <Caption>Caption</Caption>
      </Ripple>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
