import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { Dropdown } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';
import Container from '../components/Container';

const store = new Store({
  selectedItem: '',
});

const data = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
];

storiesOf('Components|Dropdown', module).add('Outlined', () => (
  <Container>
    <Header title={'Outlined Dropdown'} />

    <State store={store} style={{ flex: 1 }}>
      {state => (
        <Dropdown
          label={'Dropdown'}
          menuItems={data}
          onSelect={value => store.set({ selectedItem: value.name })}
          selectedItem={state.selectedItem}
        />
      )}
    </State>
  </Container>
));
