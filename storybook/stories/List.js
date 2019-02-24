import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListExpanded,
} from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('List', module).add('List', () => (
  <Container>
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
  </Container>
));
