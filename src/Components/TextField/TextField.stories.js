import React from 'react';
import { View } from 'react-native';

import { TextField } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  flatOne: '',
  flatTwo: '',
  flatThree: '',
  filledOne: '',
  filledTwo: '',
  filledThree: '',
  outlinedOne: '',
  outlinedTwo: '',
  outlinedThree: '',
});

storiesOf('Components|TextField', module)
  .addParameters({ jest: ['TextField'] })
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
  ))
  .add('Filled', () => (
    <Container>
      <Header title={'Filled TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'filled'}
              containerStyle={{ marginTop: 20 }}
              label={'Label'}
              value={state.filledOne}
              onChangeText={value => store.set({ filledOne: value })}
            />
            <TextField
              type={'filled'}
              containerStyle={{ marginTop: 20 }}
              label={'Multiline'}
              multiline
              value={state.filledTwo}
              onChangeText={value => store.set({ filledTwo: value })}
            />
            <TextField
              type={'filled'}
              containerStyle={{ marginTop: 20 }}
              label={'Label'}
              error={true}
              value={state.filledThree}
              onChangeText={value => store.set({ filledThree: value })}
              helperText={'There is an error'}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Outlined', () => (
    <Container>
      <Header title={'Outlined TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'outlined'}
              containerStyle={{ marginTop: 20 }}
              label={'Label'}
              value={state.outlinedOne}
              onChangeText={value => store.set({ outlinedOne: value })}
            />
            <TextField
              type={'outlined'}
              containerStyle={{ marginTop: 20 }}
              label={'Multiline'}
              multiline
              value={state.outlinedTwo}
              onChangeText={value => store.set({ outlinedTwo: value })}
            />
            <TextField
              type={'outlined'}
              containerStyle={{ marginTop: 20 }}
              label={'Label'}
              error={true}
              value={state.outlinedhree}
              onChangeText={value => store.set({ outlinedhree: value })}
              helperText={'There is an error'}
            />
          </View>
        )}
      </State>
    </Container>
  ));
