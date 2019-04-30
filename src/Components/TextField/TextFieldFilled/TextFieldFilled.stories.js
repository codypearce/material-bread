import React from 'react';
import { View } from 'react-native';

import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';
import { TextField, Icon } from '../../../';

const store = new Store({
  filledOne: '',
  filledTwo: '',
  filledThree: '',
});

export default storiesOf('Components|TextField/Filled', module)
  .addParameters({ jest: ['TextFieldFilled'] })

  .add('Simple', () => (
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
  .add('Multiline', () => (
    <Container>
      <Header title={'Filled TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'filled'}
              containerStyle={{ marginTop: 20 }}
              label={'Multiline'}
              multiline
              value={state.filledTwo}
              onChangeText={value => store.set({ filledTwo: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with leadingIcon', () => (
    <Container>
      <Header title={'Filled TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'filled'}
              containerStyle={{ marginTop: 20 }}
              label={'Icon'}
              leadingIcon={
                <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
              }
              value={state.filledTwo}
              onChangeText={value => store.set({ filledTwo: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ));
