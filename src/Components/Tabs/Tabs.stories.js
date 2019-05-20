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
  .add('label', () => (
    <Container>
      <Header title={'Tabs'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Tabs
              selectedIndex={state.selectedTab}
              handleChange={index => store.set({ selectedTab: index })}
              actionItems={[
                { label: 'Dogs' },
                { label: 'Cats' },
                { label: 'Birds' },
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('icon', () => (
    <Container>
      <Header title={'Tabs'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Tabs
              selectedIndex={state.selectedTab}
              handleChange={index => store.set({ selectedTab: index })}
              actionItems={[
                { icon: 'phone' },
                { icon: 'favorite' },
                { icon: 'map' },
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('icon + label', () => (
    <Container>
      <Header title={'Tabs'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Tabs
              selectedIndex={state.selectedTab}
              handleChange={index => store.set({ selectedTab: index })}
              actionItems={[
                { icon: 'phone', label: 'Recents' },
                { icon: 'favorite', label: 'Favorites' },
                { icon: 'map', label: 'Nearby' },
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ));
