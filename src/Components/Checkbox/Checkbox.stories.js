import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { View } from 'react-native';

import { Checkbox } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';
import Container from '../components/Container';

const store = new Store({
  checkedOne: true,
  checkedTwo: false,
  checkedThree: false,
});

storiesOf('Components|Checkbox', module)
  .addParameters({ jest: ['Checkbox'] })
  .add('Icons', () => (
    <Container>
      <Header title={'Icons'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              checked={state.checkedOne}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedTwo}
              icon={'add-circle-outline'}
              checkedIcon={'add-circle'}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#E91E63'}
              icon={'bookmark-border'}
              checkedIcon={'bookmark'}
              checked={state.checkedThree}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
            />
            <Checkbox
              indeterminate
              checkboxColor={'#F44336'}
              checked={state.checkedFour}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
            />
            <Checkbox
              checked={state.checkedFive}
              disabled
              onPress={() => store.set({ checkedFive: !state.checkedFive })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Labels', () => (
    <Container>
      <Header title={'Labels'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              label={'Click me'}
              checked={state.checkedOne}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedTwo}
              label={'Item 2'}
              labelStyle={{ fontSize: 18, color: '#009688' }}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#E91E63'}
              icon={'bookmark-border'}
              checkedIcon={'bookmark'}
              label={'Bookmark'}
              labelStyle={{ fontSize: 14, color: '#E91E63' }}
              checked={state.checkedThree}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
            />

            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#3F51B5'}
              label={'Left'}
              labelStyle={{ fontSize: 14, color: '#3F51B5' }}
              labelPos={'left'}
              checked={state.checkedFour}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('iOS', () => (
    <Container>
      <Header title={'iOS'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              ios
              checked={state.checkedOne}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
            />
            <Checkbox
              ios
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedTwo}
              label={'Toggle'}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
            />
            <Checkbox
              ios
              disabled
              checkboxColor={'#E91E63'}
              label={'Disabled'}
              checked={state.checkedThree}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
            />
          </View>
        )}
      </State>
    </Container>
  ));
