import React from 'react';
import { View, Image } from 'react-native';

import { Chip, Icon, Avatar } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  chipOne: true,
  chipTwo: true,
  chipThree: true,
  chipFour: true,
  chipFive: true,
  chipSix: true,
});

/* eslint-disable no-console */

export default storiesOf('Components|Chip', module)
  .addParameters({ jest: ['Chip'] })
  .add('Filled', () => (
    <Container>
      <Header title={'Filled'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <Chip text={'Chip'} />
            <Chip
              text={'Delete me'}
              visible={state.chipTwo}
              onDelete={() => store.set({ chipTwo: false })}
            />
            <Chip
              text={'Alaska'}
              color={'#009688'}
              visible={state.chipThree}
              onDelete={() => store.set({ chipThree: false })}
              leftIcon={<Icon name="place" color={'white'} />}
            />
            <Chip
              text={'User'}
              themeColor={'primary'}
              onPress={() => console.log('clicked four')}
              leftIcon={
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
                />
              }
            />
            <Chip
              text={'Click me'}
              themeColor={'primary'}
              onPress={() => console.log('clicked five')}
            />
            <Chip
              text={'Biking'}
              themeColor={'secondary'}
              leftIcon={<Icon name="directions-bike" color={'#009688'} />}
              visible={state.chipSix}
              onDelete={() => store.set({ chipSix: false })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Outlined', () => (
    <Container>
      <Header title={'Outlined'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <Chip text={'Chip'} chipStyle={'outlined'} />
            <Chip
              text={'Delete me'}
              chipStyle={'outlined'}
              visible={state.chipTwo}
              onDelete={() => store.set({ chipTwo: false })}
            />
            <Chip
              text={'Alaska'}
              chipStyle={'outlined'}
              color={'#009688'}
              visible={state.chipThree}
              onDelete={() => store.set({ chipThree: false })}
              leftIcon={<Icon name="place" color={'#009688'} />}
            />
            <Chip
              text={'User'}
              chipStyle={'outlined'}
              themeColor={'primary'}
              onPress={() => console.log('clicked four')}
              leftIcon={
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
                />
              }
            />
            <Chip
              text={'Click me'}
              chipStyle={'outlined'}
              themeColor={'primary'}
              onPress={() => console.log('clicked five')}
            />
            <Chip
              text={'Biking'}
              chipStyle={'outlined'}
              themeColor={'secondary'}
              leftIcon={<Icon name="directions-bike" color={'#009688'} />}
              visible={state.chipSix}
              onDelete={() => store.set({ chipSix: false })}
            />
          </View>
        )}
      </State>
    </Container>
  ));
