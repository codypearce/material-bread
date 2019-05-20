import React from 'react';
import { View } from 'react-native';

import { Tabs } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  selectedTab: 1,
});

export default storiesOf('Components|Tabs', module)
  .addParameters({ jest: ['Tabs'] })
  .add('simple', () => (
    <Container>
      <Header title={'Tabs'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Tabs
              actionItems={['One', 'Two', 'Three', 'Four', 'Five']}
              selectedIndex={state.selectedTab}
              handleChange={index => store.set({ selectedTab: index })}
            />
          </View>
        )}
      </State>
    </Container>
  ));
