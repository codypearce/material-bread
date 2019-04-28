import React from 'react';
import { View } from 'react-native';

import { Dialog, Button } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  visible: false,
});

export default storiesOf('Components|Dialog', module)
  .addParameters({ jest: ['Dialog'] })
  .add('Alert', () => (
    <Container>
      <Header title={'Alert Dialog'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row' }}>
            <Button
              text={'Open'}
              onPress={() => store.set({ visible: !state.visible })}
            />
            <Dialog
              visible={state.visible}
              onTouchOutside={() => store.set({ visible: false })}
              supportingText={'Discard draft?'}
              style={{ width: 280 }}
              actionItems={[
                {
                  text: 'Cancel',
                  onPress: () => store.set({ visible: false }),
                },
                {
                  text: 'Discard',
                  onPress: () => store.set({ visible: false }),
                },
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Confirmation', () => (
    <Container>
      <Header title={'Confirmation Dialog'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row' }}>
            <Button
              text={'Open'}
              onPress={() => store.set({ visible: !state.visible })}
            />
            <Dialog
              visible={state.visible}
              onTouchOutside={() => store.set({ visible: false })}
              title={'Use Googles location service?'}
              supportingText={
                'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
              }
              actionItems={[
                {
                  text: 'Cancel',
                  onPress: () => store.set({ visible: false }),
                },
                {
                  text: 'OK',
                  onPress: () => store.set({ visible: false }),
                },
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ));
