import React from 'react';
import { View } from 'react-native';

import { Snackbar, Button } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  show1: false,
  show2: false,
});

export default storiesOf('Components|Snackbar', module)
  .addParameters({ jest: ['Snackbar'] })
  .add('Simple Snackbar', () => (
    <Container>
      <Header title={'Simple Snackbar'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flex: 1 }}>
            <Button
              type="outlined"
              onPress={() => store.set({ show1: true })}
              text={'Open Snackbar'}
              textColor={'#6E2CFA'}
            />
            <Snackbar
              visible={state.show1}
              onButtonPress={() => store.set({ show1: false })}
              buttonLabel={'Ok'}
              buttonTextColor={'#6E2CFA'}>
              {'This is a snackbar component'}
            </Snackbar>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('No button snackbar', () => (
    <Container>
      <Header title={'No Button Snackbar'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flex: 1 }}>
            <Button
              type="outlined"
              onPress={() => store.set({ show2: true })}
              text={'Open Snackbar'}
              textColor={'#6E2CFA'}
            />
            <Snackbar visible={state.show2}>
              {'This is a single line snackbar'}
            </Snackbar>
          </View>
        )}
      </State>
    </Container>
  ));
