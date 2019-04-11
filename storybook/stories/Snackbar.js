import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { View } from 'react-native';

import { Snackbar, Button } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';
import Container from '../components/Container';

const store = new Store({
  show: false,
});

storiesOf('Components|Snackbar', module).add('Snackbar', () => (
  <Container>
    <Header title={'Snackbar'} />
    <State store={store} style={{ flex: 1 }}>
      {state => (
        <View style={{ flex: 1 }}>
          <Button
            type="outlined"
            onPress={() => store.set({ show: true })}
            text={'Open Snackbar'}
          />
          <Snackbar
            visible={state.show}
            onButtonPress={() => store.set({ show: false })}
            buttonLabel={'Ok'}>
            {'This is a snackbar component'}
          </Snackbar>
        </View>
      )}
    </State>
  </Container>
));
