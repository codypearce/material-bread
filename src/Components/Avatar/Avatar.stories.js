import React from 'react';
import { Image, View } from 'react-native';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { Avatar } from '../..';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';

/* eslint-disable no-console */

export default storiesOf('Components|Avatars', module)
  .addParameters({ jest: ['Avatar'] })
  .add('Image', () => (
    <Container>
      <Header title={'Image Avatar'} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Avatar
          type="image"
          image={
            <Image
              source={{
                uri:
                  'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
              }}
            />
          }
          size={16}
        />
        <Avatar
          type="image"
          image={
            <Image
              source={{
                uri:
                  'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
              }}
            />
          }
          size={24}
        />
        <Avatar
          type="image"
          image={
            <Image
              source={{
                uri:
                  'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
              }}
            />
          }
          size={38}
          onPress={() => console.log('avatar')}
          ripple
        />
        <Avatar
          type="image"
          image={
            <Image
              source={{
                uri:
                  'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
              }}
            />
          }
          size={56}
        />
        <Avatar
          type="image"
          image={
            <Image
              source={{
                uri:
                  'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
              }}
            />
          }
          size={80}
        />
        <Avatar
          type="image"
          image={
            <Image
              source={{
                uri:
                  'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
              }}
            />
          }
          size={70}
        />
      </View>
    </Container>
  ))
  .add('Icon', () => (
    <Container>
      <Header title={'Icon Avatar'} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Avatar
          type="icon"
          content="arrow-back"
          contentColor={'#c2185b'}
          color={'black'}
          size={16}
        />
        <Avatar type="icon" content="alarm" size={24} color={'#c2185b'} />
        <Avatar
          type="icon"
          content="add"
          contentColor={'#E91E63'}
          size={48}
          color={'#8BC34A'}
        />
        <Avatar
          type="icon"
          content="face"
          contentColor={'white'}
          size={64}
          color={'#42a5f5'}
        />
      </View>
    </Container>
  ))
  .add('Text', () => (
    <Container>
      <Header title={'Text Avatar'} />

      <Avatar
        type="text"
        content="CP"
        contentColor={'white'}
        size={64}
        color={'#42a5f5'}
      />
      <Avatar type="text" content="MB" size={48} color={'#c2185b'} />
      <Avatar
        type="text"
        content="NP"
        contentColor={'#c2185b'}
        color={'#f4511e'}
      />
    </Container>
  ));
