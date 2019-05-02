import React from 'react';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { View } from 'react-native';

import { Checkbox } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  checkedOne: true,
  checkedTwo: true,
  checkedThree: true,
  checkedFour: true,
  checkedFive: true,
});

export default storiesOf('Components|Checkbox', module)
  .addParameters({ jest: ['Checkbox'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Simple'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              checked={state.checkedOnePrime}
              onPress={() =>
                store.set({ checkedOnePrime: !state.checkedOnePrime })
              }
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedTwoPrime}
              onPress={() =>
                store.set({ checkedTwoPrime: !state.checkedTwoPrime })
              }
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#E91E63'}
              checked={state.checkedThreePrime}
              onPress={() =>
                store.set({ checkedThreePrime: !state.checkedThreePrime })
              }
            />
            <Checkbox
              indeterminate
              checkboxColor={'#795548'}
              checked={state.checkedFourPrime}
              onPress={() =>
                store.set({ checkedFourPrime: !state.checkedFourPrime })
              }
            />
            <Checkbox
              error
              checked={state.checkedFivePrime}
              onPress={() =>
                store.set({ checkedFivePrime: !state.checkedFivePrime })
              }
            />
          </View>
        )}
      </State>

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
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
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#E91E63'}
              checked={state.checkedThree}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
            />
            <Checkbox
              indeterminate
              checkboxColor={'#795548'}
              checked={state.checkedFour}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
            />
            <Checkbox
              error
              checked={state.checkedFive}
              onPress={() => store.set({ checkedFive: !state.checkedFive })}
            />
          </View>
        )}
      </State>

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              checked={state.checkedOnePrime}
              unCheckedColor={'#1e88e5'}
              onPress={() =>
                store.set({ checkedOnePrime: !state.checkedOnePrime })
              }
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              unCheckedColor={'#009688'}
              checked={state.checkedTwoPrime}
              onPress={() =>
                store.set({ checkedTwoPrime: !state.checkedTwoPrime })
              }
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#E91E63'}
              unCheckedColor={'#E91E63'}
              checked={state.checkedThreePrime}
              onPress={() =>
                store.set({ checkedThreePrime: !state.checkedThreePrime })
              }
            />
            <Checkbox
              indeterminate
              checkboxColor={'#795548'}
              unCheckedColor={'#795548'}
              checked={state.checkedFourPrime}
              onPress={() =>
                store.set({ checkedFourPrime: !state.checkedFourPrime })
              }
            />
            <Checkbox
              error
              checked={state.checkedFivePrime}
              onPress={() =>
                store.set({ checkedFivePrime: !state.checkedFivePrime })
              }
            />
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              disabled
              checked={state.checkedOne}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
            />
            <Checkbox
              disabled
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedTwo}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
            />
            <Checkbox
              disabled
              rippleMatchesCheckbox
              checkboxColor={'#E91E63'}
              checked={state.checkedThree}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
            />
            <Checkbox
              disabled
              indeterminate
              checkboxColor={'#795548'}
              checked={state.checkedFour}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
            />
            <Checkbox
              error
              disabled
              checked={state.checkedFive}
              onPress={() => store.set({ checkedFive: !state.checkedFive })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Icons', () => (
    <Container>
      <Header title={'Icons'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              checked={state.checkedOnePrime}
              icon={'favorite-border'}
              checkedIcon={'favorite'}
              checkboxColor={'#F44336'}
              onPress={() =>
                store.set({ checkedOnePrime: !state.checkedOnePrime })
              }
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedTwoPrime}
              icon={'add-circle-outline'}
              checkedIcon={'add-circle'}
              onPress={() =>
                store.set({ checkedTwoPrime: !state.checkedTwoPrime })
              }
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#E91E63'}
              icon={'bookmark-border'}
              checkedIcon={'bookmark'}
              checked={state.checkedThreePrime}
              onPress={() =>
                store.set({ checkedThreePrime: !state.checkedThreePrime })
              }
            />
            <Checkbox
              icon={'folder-open'}
              checkedIcon={'folder'}
              checkboxColor={'#F44336'}
              checked={state.checkedFourPrime}
              onPress={() =>
                store.set({ checkedFourPrime: !state.checkedFourPrime })
              }
            />
          </View>
        )}
      </State>

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              checked={state.checkedOne}
              icon={'favorite-border'}
              checkedIcon={'favorite'}
              checkboxColor={'#F44336'}
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
              icon={'folder-open'}
              checkedIcon={'folder'}
              checkboxColor={'#F44336'}
              checked={state.checkedFour}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
            />
          </View>
        )}
      </State>

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              checked={state.checkedOnePrime}
              icon={'favorite-border'}
              checkedIcon={'favorite'}
              checkboxColor={'#F44336'}
              unCheckedColor={'#F44336'}
              onPress={() =>
                store.set({ checkedOnePrime: !state.checkedOnePrime })
              }
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              unCheckedColor={'#009688'}
              checked={state.checkedTwoPrime}
              icon={'add-circle-outline'}
              checkedIcon={'add-circle'}
              onPress={() =>
                store.set({ checkedTwoPrime: !state.checkedTwoPrime })
              }
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#E91E63'}
              unCheckedColor={'#E91E63'}
              icon={'bookmark-border'}
              checkedIcon={'bookmark'}
              checked={state.checkedThreePrime}
              onPress={() =>
                store.set({ checkedThreePrime: !state.checkedThreePrime })
              }
            />
            <Checkbox
              checkboxColor={'#F44336'}
              unCheckedColor={'#F44336'}
              icon={'folder-open'}
              checkedIcon={'folder'}
              checked={state.checkedFourPrime}
              onPress={() =>
                store.set({ checkedFourPrime: !state.checkedFourPrime })
              }
            />
          </View>
        )}
      </State>

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Checkbox
              disabled
              checked={state.checkedOne}
              icon={'favorite-border'}
              checkedIcon={'favorite'}
              checkboxColor={'#F44336'}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
            />
            <Checkbox
              disabled
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedTwo}
              icon={'add-circle-outline'}
              checkedIcon={'add-circle'}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
            />
            <Checkbox
              disabled
              rippleMatchesCheckbox
              checkboxColor={'#E91E63'}
              icon={'bookmark-border'}
              checkedIcon={'bookmark'}
              checked={state.checkedThree}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
            />
            <Checkbox
              disabled
              icon={'folder-open'}
              checkedIcon={'folder'}
              checkboxColor={'#F44336'}
              checked={state.checkedFour}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
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
              label={'Click'}
              labelStyle={{ fontSize: 14, color: '#3F51B5' }}
              checked={state.checkedFour}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
            />
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: 40,
            }}>
            <Checkbox
              label={'Click me'}
              checked={state.checkedOne}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              labelPos={'left'}
            />
            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedTwo}
              label={'Item 2'}
              labelStyle={{ fontSize: 18, color: '#009688' }}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
              labelPos={'left'}
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
              labelPos={'left'}
            />

            <Checkbox
              rippleMatchesCheckbox
              checkboxColor={'#3F51B5'}
              label={'Click'}
              labelStyle={{ fontSize: 14, color: '#3F51B5' }}
              checked={state.checkedFour}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
              labelPos={'left'}
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
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
            />
            <Checkbox
              ios
              checkboxColor={'#E91E63'}
              label={'Toggle'}
              checked={state.checkedThree}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
            />
            <Checkbox
              ios
              disabled
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedFour}
              label={'Disabled'}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
            />
            <Checkbox
              ios
              error
              rippleMatchesCheckbox
              checkboxColor={'#009688'}
              checked={state.checkedFive}
              label={'Error'}
              onPress={() => store.set({ checkedFive: !state.checkedFive })}
            />
          </View>
        )}
      </State>
    </Container>
  ));
