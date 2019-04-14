import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListExpanded,
} from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

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
