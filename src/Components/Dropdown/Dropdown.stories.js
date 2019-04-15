import React from 'react';

import { Dropdown } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  selectedItem: '',
});

const data = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
];

export default storiesOf('Components|Dropdown', module)
  .addParameters({ jest: ['Dropdown'] })
  .add('Outlined', () => (
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
