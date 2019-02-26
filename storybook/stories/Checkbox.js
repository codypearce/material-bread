import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { View } from 'react-native';

import { Checkbox } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';
import Container from '../components/Container';

const store = new Store({
  checked: 0,
});

storiesOf('Checkbox', module).add('Material', () => (
  <Container>
    <Header title={'Checkbox'} />

    <State store={store} style={{ flex: 1 }}>
      {state => (
        <View>
          <Checkbox
            checked={state.checked == 1}
            onPress={() => store.set({ checked: 1 })}
          />
          <Checkbox
            checked={state.checked == 2}
            onPress={() => store.set({ checked: 2 })}
          />
          <Checkbox
            checked={state.checked == 3}
            disabled
            onPress={() => store.set({ checked: 3 })}
          />
        </View>
      )}
    </State>
  </Container>
));
