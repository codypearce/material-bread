import React from 'react';

import { Divider, List, ListItem, Avatar } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Divider', module)
  .addParameters({ jest: ['Divider'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Divider'} />

      <Divider />
      <Divider />
      <Divider marginVertical={24} />
    </Container>
  ))
  .add('subheader', () => (
    <Container>
      <Header title={'Divider'} />

      <Divider subheader={'Subheader'} />
      <Divider subheader={'Title'} insetHeader={8} />
      <Divider subheader={'Section'} insetHeader={16} marginVertical={24} />
    </Container>
  ))

  .add('inset', () => (
    <Container>
      <Header title={'Inset'} />

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
        <Divider insetHeader={40} />
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
