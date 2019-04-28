import React from 'react';
import { View, Animated } from 'react-native';

import { Hoverable } from '../../';

import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';
const store = new Store({
  color: '#00BCD4',
  left: new Animated.Value(0),
});

export default storiesOf('Utils|Hoverable', module)
  .addParameters({ jest: ['Hoverable'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Hoverable'} subtitle={'Cross Platform Hover Component'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row' }}>
            <Hoverable
              onHoverIn={() => store.set({ color: '#009688' })}
              onHoverOut={() => store.set({ color: '#00BCD4' })}>
              <View
                style={{
                  width: 200,
                  height: 125,
                  backgroundColor: state.color,
                }}
              />
            </Hoverable>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Animation', () => (
    <Container>
      <Header title={'Hoverable'} subtitle={'Cross Platform Hover Component'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row' }}>
            <Hoverable
              onHoverIn={() => {
                Animated.timing(state.left, {
                  toValue: 1,
                  duration: 500,
                }).start();
              }}
              onHoverOut={() => {
                Animated.timing(state.left, {
                  toValue: 0,
                  duration: 500,
                }).start();
              }}>
              <Animated.View
                style={{
                  width: 200,
                  height: 125,
                  backgroundColor: state.color,
                  transform: [
                    {
                      rotate: state.left.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                  ],
                }}
              />
            </Hoverable>
          </View>
        )}
      </State>
    </Container>
  ));
