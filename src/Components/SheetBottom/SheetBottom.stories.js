import React from 'react';
import { View, Platform } from 'react-native';

import { SheetBottom, Button, List, ListItem, Icon } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  visible: false,
});

export default storiesOf('Components|SheetBottom', module)
  .addParameters({ jest: ['SheetBottom'] })
  .add('Modal', () => (
    <Container>
      <Header title={'SheetBottom'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flex: 1, height: 400 }}>
            <Button
              text="Open Sheet"
              onPress={() => {
                store.set({ visible: true });
              }}
            />
            <SheetBottom
              visible={state.visible}
              pageHeight={Platform.OS == 'web' ? 600 : null}
              onBackdropPress={() => store.set({ visible: false })}
              onSwipeDown={() => store.set({ visible: false })}>
              <List>
                <ListItem
                  text={'Attractions'}
                  icon={<Icon name={'local-movies'} size={24} />}
                />
                <ListItem
                  text={'Dining'}
                  icon={<Icon name={'local-dining'} size={24} />}
                />
                <ListItem
                  text={'Education'}
                  icon={<Icon name={'edit'} size={24} />}
                />
                <ListItem
                  text={'Health'}
                  icon={<Icon name={'favorite'} size={24} />}
                />
                <ListItem
                  text={'Family'}
                  icon={<Icon name={'group'} size={24} />}
                />
                <ListItem
                  text={'Office'}
                  icon={<Icon name={'content-cut'} size={24} />}
                />
                <ListItem
                  text={'Promotions'}
                  icon={<Icon name={'loyalty'} size={24} />}
                />
              </List>
            </SheetBottom>
          </View>
        )}
      </State>
    </Container>
  ));
