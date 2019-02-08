import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { ThemeContext, TextField } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';

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

storiesOf('TextField', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Flat', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Flat TextField
        </Text>
      </View>
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
    </ThemeContext.Provider>
  ))
  .add('Filled', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Filled TextField
        </Text>
      </View>
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
    </ThemeContext.Provider>
  ))
  .add('Outlined', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>
          Outlined TextField
        </Text>
      </View>
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
    </ThemeContext.Provider>
  ));
