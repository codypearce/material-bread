import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { BottomNavigation, BottomNavigationItem } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';
import { State, Store } from '@sambego/storybook-state';
const store = new Store({
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
});

storiesOf('Components|Bottom Navigation', module)
  .addParameters({ jest: ['BottomNavigation'] })
  .add('Component', () => (
    <Container>
      <Header title={'Bottom Navigation'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.one}
            handleChange={value => store.set({ one: value })}
            actionItems={[
              { icon: 'home' },
              { icon: 'favorite' },
              { icon: 'info' },
              <BottomNavigationItem
                key={4}
                icon={'settings'}
                label={'Settings'}
              />,
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
              { label: 'Home' },
              { label: 'Favorite' },
              { label: 'Info' },
              <BottomNavigationItem key={4} label={'Settings'} />,
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
              { icon: 'home', label: 'Home' },
              { icon: 'favorite', label: 'Favorite' },
              { icon: 'info', label: 'Info' },
              <BottomNavigationItem
                key={4}
                icon={'settings'}
                label={'Settings'}
              />,
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
              { icon: 'favorite', label: 'Favorite' },
              { icon: 'info', label: 'Info' },
              <BottomNavigationItem
                key={4}
                icon={'settings'}
                label={'Settings'}
              />,
            ]}
          />
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%' }}
            backgroundColor={'black'}
            value={state.five}
            handleChange={value => store.set({ five: value })}
            actionItems={[
              <BottomNavigationItem key={1} icon={'home'} label={'Home'} />,
              <BottomNavigationItem
                key={2}
                icon={'favorite'}
                label={'Favorite'}
                badgeProps={{
                  size: 7,
                  color: 'red',
                  right: 1,
                  top: 2,
                }}
              />,
              <BottomNavigationItem key={3} icon={'info'} label={'Info'} />,
              <BottomNavigationItem
                key={4}
                icon={'settings'}
                label={'Settings'}
                badgeProps={{
                  content: 72,
                  size: 14,
                  color: 'red',
                }}
              />,
            ]}
          />
        )}
      </State>
    </Container>
  ));
