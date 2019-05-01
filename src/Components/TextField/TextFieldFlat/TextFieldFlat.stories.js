import React from 'react';
import { View } from 'react-native';

import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';
import { TextField, Icon, Caption, BodyText } from '../../../';

const store = new Store({
  flatOne: '',
  flatTwo: '',
  flatThree: '',
});

export default storiesOf('Components|TextField/Flat', module)
  .addParameters({ jest: ['TextFieldFlat'] })
  .add('simple', () => (
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
          </View>
        )}
      </State>
    </Container>
  ))
  .add('multiline', () => (
    <Container>
      <Header title={'Flat TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              containerStyle={{ marginTop: 20 }}
              label={'Multiline'}
              multiline
              value={state.flatTwo}
              onChangeText={value => store.set({ flatTwo: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with leadingIcon', () => (
    <Container>
      <Header title={'Flat TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'flat'}
              containerStyle={{ marginTop: 20 }}
              label={'Icon'}
              leadingIcon={
                <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
              }
              value={state.flatTwo}
              onChangeText={value => store.set({ flatTwo: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with prefix', () => (
    <Container>
      <Header title={'Flat TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'flat'}
              containerStyle={{ marginTop: 20 }}
              label={'Pounds'}
              prefix={<BodyText text="$" />}
              value={state.flatOne}
              onChangeText={value => store.set({ flatOne: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with suffix', () => (
    <Container>
      <Header title={'Flat TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'flat'}
              containerStyle={{ marginTop: 20 }}
              label={'Pounds'}
              suffix={<Caption text="lbs" />}
              value={state.flatOne}
              onChangeText={value => store.set({ flatOne: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))

  .add('with trailingIcon', () => (
    <Container>
      <Header title={'Flat TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'flat'}
              containerStyle={{ marginTop: 20 }}
              label={'Icon'}
              trailingIcon={
                <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
              }
              value={state.flatOne}
              onChangeText={value => store.set({ flatOne: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with helperText', () => (
    <Container>
      <Header title={'Flat TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              label={'Label'}
              value={state.flatOne}
              onChangeText={value => store.set({ flatOne: value })}
              helperText={'This is some helper text'}
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
  .add('dense', () => (
    <Container>
      <Header title={'Flat TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              label={'Label'}
              value={state.flatOne}
              onChangeText={value => store.set({ flatOne: value })}
              dense
            />

            <TextField
              containerStyle={{ marginTop: 20 }}
              placeholder={'Placeholder'}
              value={state.flatThree}
              onChangeText={value => store.set({ flatThree: value })}
              dense
            />
          </View>
        )}
      </State>
    </Container>
  ));
