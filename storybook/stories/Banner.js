import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, Banner, Avatar } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  visibleOne: true,
  visibleTwo: true,
  visibleThree: true,
});

storiesOf('Banner', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Component', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Banner</Text>
      </View>

      <Text style={{ fontSize: 16, marginBottom: 4 }}>Single line Banner</Text>
      <State store={store}>
        {state => (
          <Banner
            visible={state.visibleOne}
            rightActionText={'Sign in'}
            rightActionOnPress={() => store.set({ visibleOne: false })}
            message={'One line text with one action'}
            singleLine
            style={{ marginBottom: 40 }}
          />
        )}
      </State>

      <Text style={{ fontSize: 16, marginBottom: 4 }}>No icon Banner</Text>
      <State store={store}>
        {state => (
          <Banner
            visible={state.visibleTwo}
            rightActionText={'Sign in'}
            rightActionOnPress={() => store.set({ visibleTwo: false })}
            leftActionText={'Continue'}
            leftActionOnPress={() => store.set({ visibleTwo: false })}
            message={
              'Two line text string with two actions. One to two lines is preferable'
            }
            style={{ marginBottom: 40 }}
          />
        )}
      </State>

      <Text style={{ fontSize: 16, marginBottom: 4 }}>
        Full Banner with icon
      </Text>
      <State store={store}>
        {state => (
          <Banner
            visible={state.visibleThree}
            rightActionText={'Sign in'}
            rightActionOnPress={() => store.set({ visibleThree: false })}
            leftActionText={'Continue'}
            leftActionOnPress={() => store.set({ visibleThree: false })}
            media={
              <Avatar
                type="icon"
                icon="notifications"
                size={40}
                iconColor={'white'}
                backgroundColor={'#42a5f5'}
              />
            }
            message={
              'Two line text string with two actions. One to two lines is preferable'
            }
          />
        )}
      </State>
    </ThemeContext.Provider>
  ));
