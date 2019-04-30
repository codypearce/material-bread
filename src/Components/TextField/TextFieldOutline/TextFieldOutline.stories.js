import React from 'react';
import { View } from 'react-native';

import { TextField } from '../../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const store = new Store({
  outlinedOne: '',
  outlinedTwo: '',
  outlinedThree: '',
});

export default storiesOf('Components|TextField/Outlined', module)
  .addParameters({ jest: ['TextFieldOutlined'] })

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
