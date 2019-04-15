import React from 'react';
import { View } from 'react-native';

import { Badge, Icon, IconButton } from '../..';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Badge', module)
  .addParameters({ jest: ['Badge'] })
  .add('Standalone', () => (
    <Container>
      <Header title={'Standalone'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 40,
        }}>
        <Badge size={12} content={24} />
        <Badge size={24} content={99} color={'#E91E63'} />
        <Badge size={36} content={2} color={'#9C27B0'} />
        <Badge size={48} content={102} color={'#009688'} />
        <Badge size={60} content={35} color={'#3F51B5'} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Badge size={12} content={24} color={'black'} t textColor={'E91E63'} />
        <Badge size={24} content={99} color={'black'} textColor={'#E91E63'} />
        <Badge size={36} content={2} color={'black'} t textColor={'#9C27B0'} />
        <Badge
          size={48}
          content={102}
          color={'black'}
          t
          textColor={'#009688'}
        />
        <Badge size={60} content={35} color={'black'} ttextColor={'#3F51B5'} />
      </View>
    </Container>
  ))
  .add('On Icons', () => (
    <Container>
      <Header title={'On Icons'} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 80,
        }}>
        <Badge size={14} content={4}>
          <Icon name="favorite" size={24} />
        </Badge>
        <Badge size={16} content={77} color={'red'}>
          <IconButton name="mail" size={32} />
        </Badge>
        <Badge size={20} content={22} color={'#8BC34A'}>
          <IconButton name="album" size={46} />
        </Badge>
        <Badge size={25} content={99} color={'#03A9F4'}>
          <IconButton name="bookmark" size={64} color={'#E91E63'} />
        </Badge>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Badge size={14} content={7} position={'left'} textColor={'pink'}>
          <IconButton name="info" size={24} />
        </Badge>
        <Badge size={18} content={1023} position={'left'}>
          <IconButton name="message" size={32} color={'#8BC34A'} />
        </Badge>
        <Badge size={24} content={123} position={'left'} color={'black'}>
          <IconButton name="error" size={48} color={'#F44336'} />
        </Badge>
        <Badge size={24} content={23} position={'left'} color={'#FFC107'}>
          <IconButton name="favorite" size={64} color={'#9C27B0'} />
        </Badge>
      </View>
    </Container>
  ));
