import React from 'react';
import { View } from 'react-native';

import { Snackbar, Button } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  show1: false,
  show2: false,
  show3: false,
});

export default storiesOf('Components|Snackbar', module)
  .addParameters({ jest: ['Snackbar'] })
  .add('Simple Snackbar', () => (
    <Container>
      <Header title={'Simple Snackbar'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flex: 1 }}>
            <Button
              type="outlined"
              onPress={() => store.set({ show1: true })}
              text={'Open Snackbar'}
              textColor={'#6E2CFA'}
            />
            <Snackbar
              visible={state.show1}
              action={
                <Button
                  type="text"
                  onPress={() => store.set({ show1: false })}
                  text={'Button'}
                  textColor={'#6E2CFA'}
                />
              }>
              {'This is a snackbar component'}
            </Snackbar>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('No button snackbar', () => (
    <Container>
      <Header title={'No Button Snackbar'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flex: 1 }}>
            <Button
              type="outlined"
              onPress={() => store.set({ show2: true })}
              text={'Open Snackbar'}
              textColor={'#6E2CFA'}
            />
            <Snackbar visible={state.show2}>
              {'This is a single line snackbar'}
            </Snackbar>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Two line snackbar', () => (
    <Container>
      <Header title={'Two line Snackbar'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flex: 1 }}>
            <Button
              type="outlined"
              onPress={() => store.set({ show3: true })}
              text={'Open Snackbar'}
              textColor={'#6E2CFA'}
            />
            <Snackbar
              visible={state.show3}
              style={{
                flex: 1,
                flexDirection: 'column',
                paddingBottom: 16,
                paddingRight: 16,
              }}
              action={
                <Button
                  style={{ marginTop: 16, marginLeft: 220 }}
                  type="text"
                  onPress={() => store.set({ show3: false })}
                  text={'Button'}
                  textColor={'#6E2CFA'}
                  density={-2}
                />
              }>
              {'Two line message with long CTA button:' +
                'Lorem ipsum dolor sit amet, consectetur'}
            </Snackbar>
          </View>
        )}
      </State>
    </Container>
  ));
