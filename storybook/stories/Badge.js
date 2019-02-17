import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { BreadProvider, Badge, Icon, IconButton } from '../../src/index';

storiesOf('Badge', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Badge</Text>
      </View>
      <Badge size={64} badgeContent={4} />
      <Badge size={24} badgeContent={24} />
      <Badge size={16} badgeContent={99} />
      <Badge
        style={{ position: 'absolute', top: 0, right: 0 }}
        size={14}
        badgeContent={4}>
        <Icon name="favorite" size={32} />
      </Badge>
      <Badge
        style={{ position: 'absolute', top: 0, right: 0 }}
        size={14}
        badgeContent={77}>
        <IconButton name="mail" size={24} />
      </Badge>
    </BreadProvider>
  ));
