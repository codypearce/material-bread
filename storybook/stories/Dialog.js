import React from 'react';
import { storiesOf } from '../helpers/storiesOf';
import { View, Text } from 'react-native';

import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Button,
} from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';

import Container from '../components/Container';

const store = new Store({
  state: false,
  visibleTwo: false,
  visibleThree: false,
});

storiesOf('Dialog', module).add('Simple', () => (
  <Container>
    <Header title={'Dialog'} />
    <Text>
      Modal is currently only working with React Native. React Native Web has
      not implemented the native functionality.
    </Text>
    <State store={store} style={{ flex: 1 }}>
      {state => (
        <View>
          <Button
            text={'Open'}
            onPress={() => this.setState({ visible: !state.visible })}
          />
          <Dialog
            visible={state.visible}
            onTouchOutside={() => this.setState({ visible: false })}>
            <DialogTitle>Use Googles location service?</DialogTitle>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
            <DialogActions>
              <Button
                text={'Cancel'}
                onPress={() => this.setState({ visible: false })}
              />
              <Button
                text={'OK'}
                onPress={() => this.setState({ visible: false })}
              />
            </DialogActions>
          </Dialog>
        </View>
      )}
    </State>
  </Container>
));
