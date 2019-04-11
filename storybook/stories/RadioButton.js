import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { View } from 'react-native';

import { RadioButton } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';
import Container from '../components/Container';

const store = new Store({
  checked: 0,
});

storiesOf('Components|Radio Button', module).add('Radio', () => (
  <Container>
    <Header title={'Radio Button'} />
    <State store={store} style={{ flex: 1 }}>
      {state => (
        <View>
          <RadioButton
            checked={state.checked == 1}
            onPress={() => store.set({ checked: 1 })}
          />
          <RadioButton
            checked={state.checked == 2}
            onPress={() => store.set({ checked: 2 })}
          />
          <RadioButton
            checked={state.checked == 3}
            disabled
            onPress={() => store.set({ checked: 3 })}
          />
        </View>
      )}
    </State>
  </Container>
));
