import React from 'react';
import { View } from 'react-native';

import { RadioButton } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  checked: 0,
});

export default storiesOf('Components|Radio Button', module)
  .addParameters({ jest: ['RadioButton'] })
  .add('Radio', () => (
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
