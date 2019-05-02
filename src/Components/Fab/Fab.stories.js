import React from 'react';
import { View } from 'react-native';

import { Fab, Button } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';
const store = new Store({
  visible: true,
});

export default storiesOf('Components|Fab', module)
  .addParameters({ jest: ['Fab'] })
  .add('simple', () => (
    <Container>
      <Header title={'Fab'} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Fab />
        <Fab backgroundColor={'#E91E63'} icon={'archive'} />
        <Fab backgroundColor={'#F44336'} icon={'delete'} />
        <Fab backgroundColor={'#009688'} icon={'edit'} />
        <Fab backgroundColor={'black'} icon={'attach-money'} />
        <Fab disabled backgroundColor={'#009688'} icon={'delete'} />
      </View>
    </Container>
  ))
  .add('animated', () => (
    <Container>
      <Header title={'Fab'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Fab animated visible={state.visible} />
              <Fab
                animated
                visible={state.visible}
                backgroundColor={'#E91E63'}
                icon={'archive'}
              />
              <Fab
                animated
                visible={state.visible}
                backgroundColor={'#F44336'}
                icon={'delete'}
              />
              <Fab
                animated
                visible={state.visible}
                mini
                backgroundColor={'#009688'}
                icon={'edit'}
              />
              <Fab
                animated
                visible={state.visible}
                mini
                backgroundColor={'black'}
                icon={'attach-money'}
              />
              <Fab
                animated
                disabled
                visible={state.visible}
                mini
                backgroundColor={'#009688'}
                icon={'delete'}
              />
            </View>
            <Button
              text={'Toggle visibility'}
              onPress={() => store.set({ visible: !state.visible })}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('mini', () => (
    <Container>
      <Header title={'Fab'} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Fab mini />
        <Fab mini backgroundColor={'#E91E63'} icon={'archive'} />
        <Fab mini backgroundColor={'#F44336'} icon={'delete'} />
        <Fab mini backgroundColor={'#009688'} icon={'edit'} />
        <Fab mini backgroundColor={'black'} icon={'attach-money'} />
        <Fab mini disabled backgroundColor={'#009688'} icon={'delete'} />
      </View>
    </Container>
  ));
