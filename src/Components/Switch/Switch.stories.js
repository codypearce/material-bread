import React from 'react';
import { View } from 'react-native';

import { Switch, BodyText, Button } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  checkedOne: true,
  checkedTwo: true,
  checkedThree: true,
  checkedFour: true,
  checkedFive: true,
  isLoading: true,
});

export default storiesOf('Components|Switch', module)
  .addParameters({ jest: ['Switch'] })
  .add('simple', () => (
    <Container>
      <Header title={'Switch'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Switch
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              checked={state.checkedOne}
              style={{ marginBottom: 16 }}
            />
            <Switch
              color={'#E91E63'}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
              checked={state.checkedTwo}
              style={{ marginBottom: 16 }}
            />
            <Switch
              color={'#009688'}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
              checked={state.checkedThree}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('loading', () => (
    <Container>
      <Header title={'Switch'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Switch
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              checked={state.checkedOne}
              loading={state.isLoading}
              style={{ marginBottom: 16 }}
            />
            <Switch
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              checked={state.checkedOne}
              loading={state.isLoading}
              style={{ marginBottom: 16 }}
              color={'#E91E63'}
            />
            <Switch
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              checked={state.checkedOne}
              loading={state.isLoading}
              style={{ marginBottom: 16 }}
              color={'#9C27B0'}
            />
            <Button
              text={'Toggle Loading'}
              type="outlined"
              onPress={() => store.set({ isLoading: !state.isLoading })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('label', () => (
    <Container>
      <Header title={'Switch'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Switch
              label={<BodyText text={'Label'} />}
              style={{ marginBottom: 16 }}
              color={'#E91E63'}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              checked={state.checkedOne}
            />
            <Switch
              label={<BodyText style={{ color: '#E91E63' }} text={'label'} />}
              style={{ marginBottom: 16 }}
              color={'#E91E63'}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
              checked={state.checkedTwo}
            />
            <Switch
              label={<BodyText text={'label'} />}
              labelPos={'left'}
              color={'#9C27B0'}
              style={{ marginBottom: 16 }}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
              checked={state.checkedThree}
            />
            <Switch
              label={<BodyText text={'label'} />}
              labelPos={'left'}
              color={'#3F51B5'}
              style={{ marginBottom: 16 }}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
              checked={state.checkedFour}
            />
          </View>
        )}
      </State>
    </Container>
  ));
