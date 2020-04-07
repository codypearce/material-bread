import React from 'react';
import { View } from 'react-native';

import { Select, Icon } from '../../..';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const store = new Store({
  selectedItem: '',
  selectedItemTwo: '',
});

const data = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
  { id: 4, name: 'Option 4' },
  { id: 5, name: 'Option 5' },
  { id: 6, name: 'Option 6' },
  { id: 7, name: 'Option 7' },
  { id: 8, name: 'Option 8' },
  { id: 9, name: 'Option 9' },
  { id: 10, name: 'Option 10' },
  { id: 11, name: 'Option 11' },
  { id: 12, name: 'Option 12' },
  { id: 13, name: 'Option 13' },
  { id: 14, name: 'Option 14' },
  { id: 15, name: 'Option 15' },
  { id: 16, name: 'Option 16' },
  { id: 17, name: 'Option 17' },
  { id: 18, name: 'Option 18' },
  { id: 19, name: 'Option 19' },
];

export default storiesOf('Components|Select/Outlined', module)
  .addParameters({ jest: ['SelectOutlined'] })
  .add('simple', () => (
    <Container>
      <Header title={'Outlined Select'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Select
              type={'outlined'}
              label={'Select'}
              menuItems={data.slice(0, 4)}
              onSelect={value => store.set({ selectedItem: value.name })}
              selectedItem={state.selectedItem}
            />
            <Select
              type={'outlined'}
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
      <Header title={'Outlined Select'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Select
              type={'outlined'}
              label={'Select'}
              menuItems={data}
              onSelect={value => store.set({ selectedItem: value.name })}
              selectedItem={state.selectedItem}
              textFieldProps={{
                dense: true,
              }}
            />
            <Select
              type={'outlined'}
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
      <Header title={'Outlined Select'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Select
              type={'outlined'}
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
