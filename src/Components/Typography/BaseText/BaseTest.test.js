import React from 'react';
import BaseText from './BaseText';

import renderer from 'react-test-renderer';

const props = {
  theme: {
    text: {},
    textColor: {
      primary: 'red',
      secondary: 'blue',
    },
  },
};

describe('BaseText', () => {
  const tree = renderer.create(<BaseText {...props} />);

  test('renders', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders with different theme color', () => {
    tree.update(<BaseText {...props} themeColor="secondary" />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
