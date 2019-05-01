import React from 'react';
import { View } from 'react-native';

import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';
import { TextField, Icon, Caption, BodyText } from '../../../';

const store = new Store({
  outlinedOne: '',
  outlinedTwo: '',
  outlinedThree: '',
});

export default storiesOf('Components|TextField/Outlined', module)
  .addParameters({ jest: ['TextFieldOutlined'] })

  .add('simple', () => (
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
  ))
  .add('multiline', () => (
    <Container>
      <Header title={'Outlined TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'outlined'}
              containerStyle={{ marginTop: 20 }}
              label={'Multiline'}
              multiline
              value={state.outlinedTwo}
              onChangeText={value => store.set({ outlinedTwo: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with leadingIcon', () => (
    <Container>
      <Header title={'Outlined TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'outlined'}
              containerStyle={{ marginTop: 20 }}
              label={'Icon'}
              leadingIcon={
                <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
              }
              value={state.outlinedOne}
              onChangeText={value => store.set({ outlinedOne: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with trailingIcon', () => (
    <Container>
      <Header title={'Outlined TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'outlined'}
              containerStyle={{ marginTop: 20 }}
              label={'Icon'}
              trailingIcon={
                <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
              }
              value={state.outlinedOne}
              onChangeText={value => store.set({ outlinedOne: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with prefix', () => (
    <Container>
      <Header title={'Outlined TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'outlined'}
              containerStyle={{ marginTop: 20 }}
              label={'Pounds'}
              prefix={<BodyText text="$" />}
              value={state.outlinedOne}
              onChangeText={value => store.set({ outlinedOne: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with suffix', () => (
    <Container>
      <Header title={'Outlined TextField'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <TextField
              type={'outlined'}
              containerStyle={{ marginTop: 20 }}
              label={'Pounds'}
              suffix={<Caption text="lbs" />}
              value={state.outlinedOne}
              onChangeText={value => store.set({ outlinedOne: value })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('with helperText', () => (
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
              helperText={'This is some helper text'}
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
  ))
  .add('dense', () => (
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
              dense
            />

            <TextField
              type={'outlined'}
              containerStyle={{ marginTop: 20 }}
              error={true}
              value={state.outlinedhree}
              onChangeText={value => store.set({ outlinedhree: value })}
              dense
            />
          </View>
        )}
      </State>
    </Container>
  ));
