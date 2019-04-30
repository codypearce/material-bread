import React from 'react';
import { View } from 'react-native';

import { TextField } from '../../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const store = new Store({
  flatOne: '',
  flatTwo: '',
  flatThree: '',
});

export default storiesOf('Components|TextField/Flat', module)
  .addParameters({ jest: ['TextFieldFlat'] })
  .add('Flat', () => (
    <Container>
      <Header title={'Flat TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              label={'Label'}
              value={state.flatOne}
              onChangeText={value => store.set({ flatOne: value })}
            />
            <TextField
              containerStyle={{ marginTop: 20 }}
              label={'Multiline'}
              multiline
              value={state.flatTwo}
              onChangeText={value => store.set({ flatTwo: value })}
            />
            <TextField
              containerStyle={{ marginTop: 20 }}
              label={'Label'}
              error={true}
              value={state.flatThree}
              onChangeText={value => store.set({ flatThree: value })}
              helperText={'There is an error'}
            />
          </View>
        )}
      </State>
    </Container>
  ));
