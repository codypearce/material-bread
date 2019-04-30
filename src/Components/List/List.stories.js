import React from 'react';

import { List, ListItem, Avatar } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|List', module)
  .addParameters({ jest: ['List'] })
  .add('simple', () => (
    <Container>
      <Header title={'Simple text List'} />

      <List style={{ width: 300 }}>
        <ListItem text={'Attractions'} />
        <ListItem text={'Dining'} />
        <ListItem text={'Education'} />
        <ListItem text={'Health'} />
        <ListItem text={'Family'} />
        <ListItem text={'Office'} />
        <ListItem text={'Promotions'} />
      </List>
    </Container>
  ))

  .add('with subheader', () => (
    <Container>
      <Header title={'List subheader'} />

      <List subheader={'Favorites'} style={{ width: 300 }}>
        <ListItem
          text={'Janet Perkins'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Mary Perkins'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Peter Carlsson'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Trevor Hansen'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
      </List>
    </Container>
  ));
