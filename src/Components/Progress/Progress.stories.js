import React from 'react';
import { View } from 'react-native';

import { ProgressBar, Button } from '../../..';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  value3: 30,
  visible2: true,
  circleValue3: 40,
});

export default storiesOf('Components|Progress', module)
  .addParameters({ jest: ['ProgressBar', 'ProgressCircle'] })
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
  ));
