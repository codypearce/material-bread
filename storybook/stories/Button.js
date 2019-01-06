import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Button, Caption, Divider } from '../../src/index';

storiesOf('Buttons', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Text Button', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Text Button</Text>
      </View>
      <Button>Button</Button>
      <Button disabled={true}>Disabled</Button>
      <Button disableRipple={true}>Disable Ripple</Button>
      <Button fullWidth={true}>Full Width</Button>

      <Button compact={true}>SM</Button>

      <Button loading={true}>SM</Button>
    </ThemeContext.Provider>
  ))
  .add('Outlined Button', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Outlined Button
        </Text>
      </View>
      <Button type="outlined">Button</Button>
      <Button type="outlined" disabled={true}>
        Disabled
      </Button>
      <Button type="outlined" disableRipple={true}>
        Disable Ripple
      </Button>
      <Button type="outlined" fullWidth={true}>
        Full Width
      </Button>

      <Button type="outlined" compact={true}>
        SM
      </Button>
      <Button type="outlined" loading={true}>
        SM
      </Button>
    </ThemeContext.Provider>
  ));
