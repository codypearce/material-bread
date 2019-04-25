import React from 'react';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { BottomNavigation, BottomNavigationItem } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { State, Store } from '@sambego/storybook-state';
const store = new Store({
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
});

export default storiesOf('Components|Bottom Navigation', module)
  .addParameters({ jest: ['BottomNavigation'] })
  .add('Label', () => (
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
            value={state.four}
            showLabels
            handleChange={value => store.set({ four: value })}
            backgroundColor={'#9C27B0'}
            actionItems={[
              { label: 'Home' },
              { label: 'Favorite' },
              { label: 'Info' },
              { label: 'Profile' },
              <BottomNavigationItem key={4} label={'Settings'} />,
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
            showLabels
            actionItems={[
              <BottomNavigationItem key={1} label={'Home'} />,
              <BottomNavigationItem key={2} label={'Favorite'} />,
              <BottomNavigationItem key={3} label={'Info'} />,
              <BottomNavigationItem key={4} label={'Settings'} />,
            ]}
          />
        )}
      </State>
    </Container>
  ))
  .add('Icons', () => (
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
              <BottomNavigationItem key={4} icon={'settings'} />,
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
              { icon: 'album' },
              { icon: 'place' },
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
              { icon: 'home' },
              { icon: 'attach-money' },
              { icon: 'favorite' },
              { icon: 'info' },
              <BottomNavigationItem key={4} icon={'settings'} />,
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
              <BottomNavigationItem key={1} icon={'home'} />,
              <BottomNavigationItem
                key={2}
                icon={'favorite'}
                badgeProps={{
                  size: 7,
                  color: 'red',
                  right: 1,
                  top: 2,
                }}
              />,
              <BottomNavigationItem key={3} icon={'info'} />,
              <BottomNavigationItem
                key={4}
                icon={'settings'}
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
  ))
  .add('Icon + Label', () => (
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
            value={state.two}
            handleChange={value => store.set({ two: value })}
            backgroundColor={'#E91E63'}
            actionItems={[
              { icon: 'home', label: 'Home' },
              { icon: 'favorite', label: 'Favorite' },
              { icon: 'info', label: 'Info' },
            ]}
          />
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{ maxWidth: 672, width: '100%', marginBottom: 40 }}
            value={state.four}
            handleChange={value => store.set({ four: value })}
            backgroundColor={'#9C27B0'}
            actionItems={[
              { icon: 'home', label: 'Home' },
              { icon: 'attach-money', label: 'Buy' },
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
  ))
  .add('Custom', () => (
    <Container>
      <Header title={'Bottom Navigation'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <BottomNavigation
            style={{
              maxWidth: 672,
              width: '100%',
              marginBottom: 40,
              borderRadius: 50,
            }}
            value={state.one}
            handleChange={value => store.set({ one: value })}
            showLabels
            actionItems={[
              <BottomNavigationItem
                key={1}
                icon={'home'}
                label={'Home'}
                rippleProps={{ rippleContainerBorderRadius: 50 }}
              />,
              <BottomNavigationItem
                key={2}
                icon={'favorite'}
                label={'Favorite'}
                rippleProps={{ rippleContainerBorderRadius: 50 }}
              />,
              <BottomNavigationItem
                key={3}
                icon={'info'}
                label={'Settings'}
                rippleProps={{ rippleContainerBorderRadius: 50 }}
              />,
              <BottomNavigationItem
                key={4}
                icon={'settings'}
                label={'Settings'}
                rippleProps={{ rippleContainerBorderRadius: 50 }}
              />,
            ]}
          />
        )}
      </State>
    </Container>
  ));
