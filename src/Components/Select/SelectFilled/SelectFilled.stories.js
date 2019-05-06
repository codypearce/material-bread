import React from 'react';
import { View } from 'react-native';

import { Select, Icon } from '../../..';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const store = new Store({
  selectedItem: '',
});

const data = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
];

export default storiesOf('Components|Select/Filled', module)
  .addParameters({ jest: ['SelectFilled'] })
  .add('simple', () => (
    <Container>
      <Header title={'Filled Select'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Select
              type={'filled'}
              label={'Select'}
              menuItems={data}
              onSelect={value => store.set({ selectedItem: value.name })}
              selectedItem={state.selectedItem}
            />
            <Select
              type={'filled'}
              label={'Select'}
              menuItems={data}
              onSelect={value => store.set({ selectedItemTwo: value.name })}
              selectedItem={state.selectedItemTwo}
              textFieldProps={{
                error: true,
                helperText: 'error',
                containerStyle: { marginTop: 40 },
              }}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('dense', () => (
    <Container>
      <Header title={'Filled Select'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Select
              type={'filled'}
              label={'Select'}
              menuItems={data}
              onSelect={value => store.set({ selectedItem: value.name })}
              selectedItem={state.selectedItem}
              textFieldProps={{
                dense: true,
              }}
            />
            <Select
              type={'filled'}
              label={'Select'}
              menuItems={data}
              onSelect={value => store.set({ selectedItemTwo: value.name })}
              selectedItem={state.selectedItemTwo}
              textFieldProps={{
                error: true,
                dense: true,
              }}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('leading icon', () => (
    <Container>
      <Header title={'Filled Select'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Select
              type={'filled'}
              label={'Select'}
              menuItems={data}
              onSelect={value => store.set({ selectedItem: value.name })}
              selectedItem={state.selectedItem}
              textFieldProps={{
                leadingIcon: (
                  <Icon name={'date-range'} size={24} color={'#6e6e6e'} />
                ),
              }}
            />
          </View>
        )}
      </State>
    </Container>
  ));
