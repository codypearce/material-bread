import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import {
  BreadProvider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListExpanded,
} from '../../src/index';
import Header from '../components/Header';

storiesOf('List', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('List', () => (
    <BreadProvider value={{}}>
      <Header>List</Header>
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
