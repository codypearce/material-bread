import React from 'react';
import { View } from 'react-native';

import { Badge, Icon, IconButton, Button } from '../..';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';
const store = new Store({
  visible: true,
});

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
        <Badge size={12} content={24} color={'black'} textColor={'#E91E63'} />
        <Badge size={24} content={99} color={'black'} textColor={'#E91E63'} />
        <Badge size={36} content={2} color={'black'} textColor={'#9C27B0'} />
        <Badge
          size={48}
          content={102}
          color={'black'}
          t
          textColor={'#009688'}
        />
        <Badge size={60} content={35} color={'black'} textColor={'#3F51B5'} />
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
  ))
  .add('Dot', () => (
    <Container>
      <Header title={'Dots'} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 80,
        }}>
        <Badge size={7}>
          <Icon name="favorite" size={24} />
        </Badge>
        <Badge size={8} color={'red'}>
          <IconButton name="mail" size={32} />
        </Badge>
        <Badge size={10} color={'#8BC34A'}>
          <IconButton name="album" size={46} />
        </Badge>
        <Badge size={12} color={'#03A9F4'}>
          <IconButton name="bookmark" size={64} color={'#E91E63'} />
        </Badge>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Badge size={7} position={'left'} textColor={'pink'}>
          <IconButton name="info" size={24} />
        </Badge>
        <Badge size={8} position={'left'}>
          <IconButton name="message" size={32} color={'#8BC34A'} />
        </Badge>
        <Badge size={9} position={'left'} color={'black'}>
          <IconButton name="error" size={48} color={'#F44336'} />
        </Badge>
        <Badge size={10} position={'left'} color={'#FFC107'}>
          <IconButton name="favorite" size={64} color={'#9C27B0'} />
        </Badge>
      </View>
    </Container>
  ))
  .add('Animated', () => (
    <Container>
      <Header title={'On Icons'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 80,
              }}>
              <Badge size={14} content={4} visible={state.visible}>
                <Icon name="favorite" size={24} />
              </Badge>
              <Badge
                size={16}
                content={77}
                color={'red'}
                visible={state.visible}>
                <IconButton name="mail" size={32} />
              </Badge>
              <Badge size={8} position={'left'} visible={state.visible}>
                <IconButton name="message" size={32} color={'#8BC34A'} />
              </Badge>
              <Badge
                size={24}
                content={99}
                color={'black'}
                textColor={'#E91E63'}
                visible={state.visible}
              />
            </View>
            <Button
              text={'Toggle visibility'}
              onPress={() => store.set({ visible: !state.visible })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('custom', () => (
    <Container>
      <Header title={'Custom'} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 80,
        }}>
        <Badge size={14} content={4} left={10} style={{ borderRadius: 3 }}>
          <Icon name="favorite" size={24} />
        </Badge>
        <Badge size={14} color={'red'} style={{ borderRadius: 3, height: 10 }}>
          <IconButton name="mail" size={32} />
        </Badge>
        <Badge
          size={20}
          content={22}
          color={'#8BC34A'}
          style={{ borderRadius: 2, transform: [{ rotate: '40deg' }] }}>
          <IconButton name="album" size={46} />
        </Badge>
        <Badge
          size={25}
          content={'99+'}
          color={'#03A9F4'}
          style={{ borderRadius: 10, width: 40 }}>
          <IconButton name="bookmark" size={64} color={'#E91E63'} />
        </Badge>
      </View>
    </Container>
  ));
