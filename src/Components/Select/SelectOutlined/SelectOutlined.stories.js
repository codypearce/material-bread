import React from 'react';
import { View } from 'react-native';

import { Select } from '../../..';
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
              menuItems={data}
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
  ));
