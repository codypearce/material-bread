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
              backgroundColor={'#009688'}
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
              backgroundColor={'#9C27B0'}
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
  ))
  .add('scrollable', () => (
    <Container>
      <Header title={'Tabs'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Tabs
              selectedIndex={state.selectedTab}
              handleChange={index => store.set({ selectedTab: index })}
              scrollEnabled
              actionItems={[
                { icon: 'phone', label: 'Recents' },
                { icon: 'favorite', label: 'Favorites' },
                { icon: 'map', label: 'Nearby' },
                { icon: 'account-circle', label: 'Account' },
                { icon: 'album', label: 'Music' },
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ));
