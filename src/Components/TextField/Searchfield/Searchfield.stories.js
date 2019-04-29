import React from 'react';
import { View } from 'react-native';

import { Searchfield } from '../../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

const store = new Store({
  searchOne: '',
});

export default storiesOf('Components|TextField/SearchField', module)
  .addParameters({ jest: ['Searchfield'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Searchfield'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Searchfield
              color={'#E91E63'}
              value={state.search}
              onChangeText={search => store.set({ search })}
              onCloseIcon={() => store.set({ search: '' })}
            />
          </View>
        )}
      </State>
    </Container>
  ));
