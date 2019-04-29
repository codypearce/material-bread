import React from 'react';
import { View } from 'react-native';

import { Searchbar } from '../../..';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const store = new Store({
  searchOne: '',
});

export default storiesOf('Components|Appbar/Searchbar', module)
  .addParameters({ jest: ['Searchbar'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Searchbar'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Searchbar
              label={'Label'}
              value={state.searchOne}
              onChangeText={value => store.set({ searchOne: value })}
              onCloseIcon={() => store.set({ searchOne: '' })}
            />
          </View>
        )}
      </State>
    </Container>
  ));
