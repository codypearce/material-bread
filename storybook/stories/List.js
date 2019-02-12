import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import {
  BreadProvider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListExpanded,
} from '../../src/index';

storiesOf('List', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('List', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>List</Text>
      </View>
      <List>
        <ListItem>
          <ListItemIcon icon={'alarm'} />
          <ListItemText primary={'This is a list Item'} />
        </ListItem>
        <ListExpanded title="Expanded">
          <ListItem>
            <ListItemText primary={'This is a list Item'} />
          </ListItem>
          <ListItem>
            <ListItemText primary={'This is a list Item'} />
          </ListItem>
        </ListExpanded>
      </List>
    </BreadProvider>
  ));
