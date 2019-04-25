import React from 'react';
import { Image } from 'react-native';

import { storiesOf } from '../../../storybook/helpers/storiesOf';

import {
  BottomNavigation,
  BottomNavigationItem,
  Icon,
  Avatar,
} from '../../../';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { State, Store } from '@sambego/storybook-state';
const store = new Store({
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
});

export default storiesOf(
  'Components|Bottom Navigation/Bottom Navigation Item',
  module,
)
  .addParameters({ jest: ['BottomNavigationItem'] })
  .add('as objects', () => (
    <Container>
      <Header title={'Bottom Navigation Item'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.one}
            handleChange={value => store.set({ one: value })}
            showLabels
            actionItems={[
              { label: 'Buy' },
              { label: 'Sell' },
              { label: 'Settings' },
            ]}
          />
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.two}
            handleChange={value => store.set({ two: value })}
            showLabels
            backgroundColor={'#E91E63'}
            actionItems={[
              { icon: 'home' },
              { icon: 'favorite' },
              { icon: 'info' },
              { icon: 'settings' },
            ]}
          />
        )}
      </State>

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.four}
            showLabels
            handleChange={value => store.set({ four: value })}
            backgroundColor={'#9C27B0'}
            actionItems={[
              { icon: 'home', label: 'Home' },
              { icon: 'attach-money', label: 'Buy' },
              { icon: 'favorite', label: 'Favorite' },
              { icon: 'info', label: 'Info' },
              { icon: 'settings', label: 'Settings' },
            ]}
          />
        )}
      </State>
    </Container>
  ))
  .add('as components', () => (
    <Container>
      <Header title={'Bottom Navigation'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.one}
            handleChange={value => store.set({ one: value })}
            showLabels
            actionItems={[
              <BottomNavigationItem key={1} label={'Album'} />,
              <BottomNavigationItem key={2} label={'Place'} />,
              <BottomNavigationItem key={3} label={'News'} />,
            ]}
          />
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.two}
            handleChange={value => store.set({ two: value })}
            showLabels
            backgroundColor={'#E91E63'}
            actionItems={[
              <BottomNavigationItem key={1} icon={'home'} />,
              <BottomNavigationItem key={2} icon={'album'} />,
              <BottomNavigationItem key={3} icon={'place'} />,
              <BottomNavigationItem key={4} icon={'assignment'} />,
            ]}
          />
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.three}
            handleChange={value => store.set({ three: value })}
            backgroundColor={'#009688'}
            actionItems={[
              <BottomNavigationItem key={1} icon={'home'} label={'Home'} />,
              <BottomNavigationItem key={2} icon={'album'} label={'Music'} />,
              <BottomNavigationItem key={3} icon={'place'} label={'Place'} />,
              <BottomNavigationItem
                key={4}
                icon={'assignment'}
                label={'News'}
              />,
              <BottomNavigationItem
                key={4}
                icon={'settings'}
                label={'Settings'}
              />,
            ]}
          />
        )}
      </State>
    </Container>
  ))

  .add('with badge', () => (
    <Container>
      <Header title={'Bottom Navigation'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.one}
            handleChange={value => store.set({ one: value })}
            showLabels
            actionItems={[
              <BottomNavigationItem key={1} label={'Album'} />,
              <BottomNavigationItem key={2} label={'Place'} />,
              <BottomNavigationItem key={3} label={'News'} />,
            ]}
          />
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.two}
            handleChange={value => store.set({ two: value })}
            showLabels
            backgroundColor={'#E91E63'}
            actionItems={[
              <BottomNavigationItem key={1} icon={'home'} />,
              <BottomNavigationItem
                key={2}
                icon={'album'}
                badgeProps={{
                  content: 72,
                  size: 14,
                  color: 'blue',
                }}
              />,
              <BottomNavigationItem key={3} icon={'place'} />,
              <BottomNavigationItem
                key={4}
                icon={'assignment'}
                badgeProps={{
                  size: 7,
                  color: 'blue',
                  right: 1,
                  top: 2,
                }}
              />,
            ]}
          />
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.three}
            handleChange={value => store.set({ three: value })}
            backgroundColor={'#009688'}
            actionItems={[
              <BottomNavigationItem key={1} icon={'home'} label={'Home'} />,
              <BottomNavigationItem key={2} icon={'album'} label={'Music'} />,
              <BottomNavigationItem
                key={3}
                icon={'place'}
                label={'Place'}
                badgeProps={{
                  content: 2,
                  size: 14,
                  color: 'red',
                }}
              />,
              <BottomNavigationItem
                key={4}
                icon={'assignment'}
                label={'News'}
                badgeProps={{
                  content: 99,
                  size: 14,
                  color: 'red',
                }}
              />,
              <BottomNavigationItem
                key={4}
                icon={'settings'}
                label={'Settings'}
                badgeProps={{
                  size: 10,
                  color: 'red',
                }}
              />,
            ]}
          />
        )}
      </State>
    </Container>
  ))
  .add('custom', () => (
    <Container>
      <Header title={'Bottom Navigation'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.one}
            handleChange={value => store.set({ one: value })}
            showLabels
            actionItems={[
              <BottomNavigationItem
                key={1}
                icon={'home'}
                label={'Home'}
                style={{ backgroundColor: '#3F51B5' }}
              />,
              <BottomNavigationItem
                key={2}
                icon={'favorite'}
                label={'Favorite'}
                style={{ backgroundColor: '#009688' }}
              />,
              <BottomNavigationItem
                key={3}
                icon={'info'}
                label={'Info'}
                style={{ backgroundColor: '#2196F3' }}
              />,
              <BottomNavigationItem
                key={4}
                icon={'settings'}
                label={'Settings'}
                style={{ backgroundColor: '#F44336' }}
              />,
            ]}
          />
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{
              maxWidth: 672,
              width: '100%',
              height: 42,
              borderTopRightRadius: 6,
              borderTopLeftRadius: 6,
            }}
            value={state.two}
            handleChange={value => store.set({ two: value })}
            backgroundColor={'black'}
            actionItems={[
              <BottomNavigationItem key={1} style={{ height: 42 }}>
                <Icon name="home" size={30} color={'white'} />
              </BottomNavigationItem>,
              <BottomNavigationItem key={2} style={{ height: 42 }}>
                <Icon name="favorite" size={30} color={'white'} />
              </BottomNavigationItem>,
              <BottomNavigationItem key={3} style={{ height: 42 }}>
                <Icon name="info" size={30} color={'white'} />
              </BottomNavigationItem>,

              <BottomNavigationItem
                key={4}
                style={{ height: 42, flexDirection: 'row' }}>
                <Avatar
                  type="image"
                  image={
                    <Image
                      source={{
                        uri:
                          'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
                      }}
                    />
                  }
                  size={30}
                />
                <Icon
                  name="expand-more"
                  size={20}
                  color={'white'}
                  style={{ alignSelf: 'flex-end', marginBottom: 4 }}
                />
              </BottomNavigationItem>,
            ]}
          />
        )}
      </State>
    </Container>
  ));
