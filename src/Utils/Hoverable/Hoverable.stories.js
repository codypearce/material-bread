import React from 'react';
import { View } from 'react-native';

import { Hoverable } from '../../';

import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';
const store = new Store({
  color: '#00BCD4',
});

export default storiesOf('Utils|Hoverable', module)
  .addParameters({ jest: ['Hoverable'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Hoverable'} subtitle={'Cross Platform Hover Component'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row' }}>
            <Hoverable
              onHoverIn={() => store.set({ color: '#009688' })}
              onHoverOut={() => store.set({ color: '#00BCD4' })}>
              <View
                style={{
                  width: 200,
                  height: 125,
                  backgroundColor: state.color,
                }}
              />
            </Hoverable>
          </View>
        )}
      </State>
    </Container>
  ));
