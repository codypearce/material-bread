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
        <Fab icon={'add'} />
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
              <Fab animated visible={state.visible} icon={'add'} />
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
        <Fab mini icon={'add'} />
        <Fab mini backgroundColor={'#E91E63'} icon={'archive'} />
        <Fab mini backgroundColor={'#F44336'} icon={'delete'} />
        <Fab mini backgroundColor={'#009688'} icon={'edit'} />
        <Fab mini backgroundColor={'black'} icon={'attach-money'} />
        <Fab mini disabled backgroundColor={'#009688'} icon={'delete'} />
      </View>
    </Container>
  ))
  .add('extended', () => (
    <Container>
      <Header title={'Fab'} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Fab icon={'add'} label={'Add'} />
        <Fab backgroundColor={'#E91E63'} icon={'archive'} label={'Archive'} />
        <Fab backgroundColor={'#F44336'} icon={'delete'} label={'Delete'} />
        <Fab backgroundColor={'#009688'} icon={'edit'} label={'Edit'} />
        <Fab backgroundColor={'black'} icon={'attach-money'} label={'Buy'} />
        <Fab
          disabled
          backgroundColor={'#009688'}
          icon={'delete'}
          label={'Disabled'}
        />
      </View>
    </Container>
  ));
