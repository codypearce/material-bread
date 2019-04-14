import React from 'react';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListExpanded,
} from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';
storiesOf('Components|List', module)
  .addParameters({ jest: ['List'] })
  .add('List', () => (
    <Container>
      <Header title={'List'} />

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
