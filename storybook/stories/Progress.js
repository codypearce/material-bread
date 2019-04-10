import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { View } from 'react-native';

import { ProgressCircle, ProgressBar, Button } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';
import Container from '../components/Container';

const store = new Store({
  value3: 30,
  visible2: true,
  circleValue3: 40,
});

storiesOf('Progress', module)
  .add('Progress Bar', () => (
    <Container>
      <Header title={'Progress Bar'} />

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
              text={' Change Value'}
              onPress={() => {
                store.set({
                  value3: Math.floor(Math.random() * Math.floor(100)),
                });
              }}
            />

            <Button
              type="outlined"
              style={{ marginTop: 20 }}
              animationDuration={500}
              text={'Hide / Show Animate'}
              onPress={() => {
                store.set({
                  visible2: !state.visible2,
                });
              }}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Progress Circle', () => (
    <Container>
      <Header title={'Progress Circle'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <ProgressCircle />
            <ProgressCircle color={'blue'} style={{ marginTop: 40 }} />

            <ProgressCircle
              value={state.circleValue3}
              size={48}
              thickness={4}
              color="#2b80ff"
              unfilledColor="#f2f2f2"
              animationMethod="timing"
              animationConfig={{ speed: 1 }}
              shouldAnimateFirstValue
              determinate
            />

            <Button
              type="outlined"
              style={{ marginTop: 20 }}
              animationDuration={500}
              text={'Change Value'}
              onPress={() => {
                store.set({
                  circleValue3: Math.floor(Math.random() * Math.floor(100)),
                });
              }}
            />
          </View>
        )}
      </State>
    </Container>
  ));
