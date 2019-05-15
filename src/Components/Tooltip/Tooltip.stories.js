import React from 'react';
import { View } from 'react-native';

import { Tooltip, Button } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  show: false,
  showBottom: false,
  showRight: false,
});

export default storiesOf('Components|Tooltip', module)
  .addParameters({ jest: ['Tooltip'] })
  .add('Tooltip', () => (
    <Container>
      <Header title={'Tooltip'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <View style={{ flexDirection: 'row', marginBottom: 30 }}>
              <Tooltip
                visible={state.show}
                content={"I'm a tooltip"}
                onBackdropPress={() => store.set({ show: false })}>
                <Button
                  type="outlined"
                  onPress={() => store.set({ show: true })}
                  text={'Top'}
                />
              </Tooltip>
            </View>
            <View style={{ marginBottom: 30 }}>
              <Tooltip
                visible={state.showBottom}
                content={"I'm a tooltip"}
                tooltipPosition={'bottom'}
                onBackdropPress={() => store.set({ showBottom: false })}>
                <Button
                  type="outlined"
                  onPress={() => store.set({ showBottom: true })}
                  text={'Bottom'}
                />
              </Tooltip>
            </View>
            <View style={{ marginBottom: 30 }}>
              <Tooltip
                visible={state.showRight}
                content={"I'm a tooltip"}
                tooltipPosition={'right'}
                onBackdropPress={() => store.set({ showRight: false })}>
                <Button
                  type="outlined"
                  onPress={() => store.set({ showRight: true })}
                  text={'Right'}
                />
              </Tooltip>
            </View>
            <View style={{ marginLeft: 100 }}>
              <Tooltip
                visible={state.showLeft}
                content={"I'm a tooltip"}
                tooltipPosition={'left'}
                onBackdropPress={() => store.set({ showLeft: false })}>
                <Button
                  type="outlined"
                  onPress={() => store.set({ showLeft: true })}
                  text={'Left'}
                />
              </Tooltip>
            </View>
          </View>
        )}
      </State>
    </Container>
  ));
