import React from 'react';
import { View } from 'react-native';

import { ProgressBar, Button } from '../../..';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const store = new Store({
  value3: 30,
  visible2: true,
  circleValue3: 40,
});

export default storiesOf('Components|Progress/ProgressBar', module)
  .addParameters({ jest: ['ProgressBar'] })
  .add('Indeterminate', () => (
    <Container>
      <Header title={'Progress Bar'} />

      <ProgressBar visible />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{ marginTop: 20 }}
        color={'#E91E63'}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{ marginTop: 20 }}
        color={'#009688'}
        animationDuration={2000}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{ marginTop: 20 }}
        color={'#673AB7'}
        animationDuration={4000}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{ marginTop: 20 }}
        color={'#8BC34A'}
        animationDuration={3000}
        height={5}
      />
      <ProgressBar
        visible
        indcatorStartPosition={100}
        trackStyle={{ marginTop: 20 }}
        color={'#03A9F4'}
        animationDuration={4000}
        height={10}
      />
    </Container>
  ))
  .add('Determinate', () => (
    <Container>
      <Header title={'Progress Bar'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ marginBottom: 40 }}>
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

      <View>
        <ProgressBar
          determinate
          value={25}
          color={'#E91E63'}
          animationDuration={2000}
          trackStyle={{ marginBottom: 40 }}
          visible
        />
        <ProgressBar
          determinate
          value={50}
          color={'#009688'}
          animationDuration={500}
          trackStyle={{ marginBottom: 40 }}
          visible
        />
        <ProgressBar
          determinate
          value={75}
          color={'#673AB7'}
          animationDuration={400}
          trackStyle={{ marginBottom: 40 }}
          visible
          height={5}
        />
      </View>
    </Container>
  ));
