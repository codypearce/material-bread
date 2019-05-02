import React from 'react';
import { View } from 'react-native';

import { RadioButton } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  checked: 1,
  checked1: 2,
  checked2: 3,
  checked3: 1,
  checked4: 1,
});

export default storiesOf('Components|Radio Button', module)
  .addParameters({ jest: ['RadioButton'] })
  .add('simple', () => (
    <Container>
      <Header title={'Radio Button'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
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
              onPress={() => store.set({ checked: 3 })}
            />
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <RadioButton
              checked={state.checked1 == 1}
              radioButtonColor={'#E91E63'}
              rippleColor={'#E91E63'}
              onPress={() => store.set({ checked1: 1 })}
            />
            <RadioButton
              checked={state.checked1 == 2}
              radioButtonColor={'#E91E63'}
              rippleColor={'#E91E63'}
              onPress={() => store.set({ checked1: 2 })}
            />
            <RadioButton
              checked={state.checked1 == 3}
              radioButtonColor={'#E91E63'}
              rippleColor={'#E91E63'}
              onPress={() => store.set({ checked1: 3 })}
            />
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <RadioButton
              checked={state.checked2 == 1}
              onPress={() => store.set({ checked2: 1 })}
              uncheckedBorderColor={'#009688'}
              radioButtonColor={'#009688'}
              rippleColor={'#009688'}
            />
            <RadioButton
              checked={state.checked2 == 2}
              onPress={() => store.set({ checked2: 2 })}
              uncheckedBorderColor={'#009688'}
              radioButtonColor={'#009688'}
              rippleColor={'#009688'}
            />
            <RadioButton
              checked={state.checked2 == 3}
              onPress={() => store.set({ checked2: 3 })}
              uncheckedBorderColor={'#009688'}
              radioButtonColor={'#009688'}
              rippleColor={'#009688'}
            />
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <RadioButton
              checked={state.checked3 == 1}
              onPress={() => store.set({ checked2: 1 })}
              disabled
            />
            <RadioButton
              checked={state.checked3 == 1}
              onPress={() => store.set({ checked2: 2 })}
              disabled
            />
            <RadioButton
              checked={state.checked3 == 1}
              onPress={() => store.set({ checked2: 3 })}
              disabled
            />
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <RadioButton
              checked={state.checked4 == 1}
              onPress={() => store.set({ checked4: 1 })}
              error
            />
            <RadioButton
              checked={state.checked4 == 2}
              onPress={() => store.set({ checked4: 2 })}
              error
            />
            <RadioButton
              checked={state.checked4 == 3}
              onPress={() => store.set({ checked4: 3 })}
              error
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('label', () => (
    <Container>
      <Header title={'Radio Button'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'column', marginBottom: 20 }}>
            <RadioButton
              checked={state.checked == 1}
              onPress={() => store.set({ checked: 1 })}
              label="Home"
            />
            <RadioButton
              checked={state.checked == 2}
              onPress={() => store.set({ checked: 2 })}
              label="Work"
            />
            <RadioButton
              checked={state.checked == 3}
              onPress={() => store.set({ checked: 3 })}
              label="Anywhere"
            />
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 20,
            }}>
            <RadioButton
              checked={state.checked1 == 1}
              radioButtonColor={'#E91E63'}
              rippleColor={'#E91E63'}
              onPress={() => store.set({ checked1: 1 })}
              label="Beach"
            />
            <RadioButton
              checked={state.checked1 == 2}
              radioButtonColor={'#E91E63'}
              rippleColor={'#E91E63'}
              onPress={() => store.set({ checked1: 2 })}
              label="Mountain"
            />
            <RadioButton
              checked={state.checked1 == 3}
              radioButtonColor={'#E91E63'}
              rippleColor={'#E91E63'}
              onPress={() => store.set({ checked1: 3 })}
              label="Woods"
            />
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <RadioButton
              checked={state.checked2 == 1}
              onPress={() => store.set({ checked2: 1 })}
              uncheckedBorderColor={'#009688'}
              radioButtonColor={'#009688'}
              rippleColor={'#009688'}
              label="Rocky"
              labelPos="left"
            />
            <RadioButton
              checked={state.checked2 == 2}
              onPress={() => store.set({ checked2: 2 })}
              uncheckedBorderColor={'#009688'}
              radioButtonColor={'#009688'}
              rippleColor={'#009688'}
              label="Mountain"
              labelPos="left"
            />
            <RadioButton
              checked={state.checked2 == 3}
              onPress={() => store.set({ checked2: 3 })}
              uncheckedBorderColor={'#009688'}
              radioButtonColor={'#009688'}
              rippleColor={'#009688'}
              label="High"
              labelPos="left"
            />
          </View>
        )}
      </State>
    </Container>
  ));
