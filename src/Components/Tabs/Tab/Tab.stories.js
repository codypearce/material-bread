import React from 'react';
import { View } from 'react-native';

import { Tabs, Tab } from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  selectedTab: 1,
});

export default storiesOf('Components|Tabs/Tab', module)
  .addParameters({ jest: ['Tab'] })

  .add('as component', () => (
    <Container>
      <Header title={'Tab'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Tabs
              selectedIndex={state.selectedTab}
              handleChange={index => store.set({ selectedTab: index })}
              actionItems={[
                <Tab key={1} icon="phone" label="Recents" />,
                <Tab key={2} icon="favorite" label="Favorites" />,
                <Tab key={3} icon="map" label="Nearby" />,
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('custom', () => (
    <Container>
      <Header title={'Tab'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Tabs
              selectedIndex={state.selectedTab}
              handleChange={index => store.set({ selectedTab: index })}
              actionItems={[
                <Tab
                  key={1}
                  icon="phone"
                  label="Recents"
                  style={{ backgroundColor: '#9C27B0' }}
                />,
                <Tab
                  key={2}
                  icon="favorite"
                  label="Favorites"
                  style={{ backgroundColor: '#009688' }}
                />,
                <Tab key={3} icon="map" label="Nearby" />,
                <Tab
                  key={4}
                  icon="account-circle"
                  label="Account"
                  style={{ backgroundColor: '#E91E63' }}
                />,
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ));
