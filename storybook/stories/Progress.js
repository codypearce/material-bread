import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import {
  BreadProvider,
  ProgressCircle,
  ProgressBar,
  Button,
} from '../../src/index';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  value3: 30,
  visible2: true,
  circleValue3: 0.3,
});

storiesOf('Progress', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Progress Bar', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Progress Bar</Text>
      </View>
      <ProgressBar visible />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <ProgressBar
              determinate
              value={50}
              animationDuration={2000}
              trackStyle={{ marginTop: 40 }}
              visible
            />
            <ProgressBar
              determinate
              value={state.value3}
              animationDuration={2000}
              trackStyle={{ marginTop: 40 }}
              visible={state.visible2}
            />
            <Button
              type="outlined"
              style={{ marginTop: 20 }}
              animationDuration={500}
              onPress={() => {
                store.set({
                  value3: Math.floor(Math.random() * Math.floor(100)),
                });
              }}>
              Change Value
            </Button>

            <Button
              type="outlined"
              style={{ marginTop: 20 }}
              animationDuration={500}
              onPress={() => {
                store.set({
                  visible2: !state.visible2,
                });
              }}>
              Hide / Show Animate
            </Button>
          </View>
        )}
      </State>
    </BreadProvider>
  ))
  .add('Progress Circle', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Progress Circle
        </Text>
      </View>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <ProgressCircle />
            <ProgressCircle color={'blue'} style={{ marginTop: 40 }} />

            <Button
              type="outlined"
              style={{ marginTop: 20 }}
              animationDuration={500}
              onPress={() => {
                store.set({
                  circleValue3: Math.floor(Math.random() * Math.floor(100)),
                });
              }}>
              Change Value
            </Button>
          </View>
        )}
      </State>
    </BreadProvider>
  ));
