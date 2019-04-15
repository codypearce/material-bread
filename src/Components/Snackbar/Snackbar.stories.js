import React from 'react';
import { View } from 'react-native';

import { Snackbar, Button } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  show: false,
});

export default storiesOf('Components|Snackbar', module)
  .addParameters({ jest: ['Snackbar'] })
  .add('Snackbar', () => (
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
