import React from 'react';

import { List, ListItem, Avatar, Icon, Checkbox } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  checkedOne: false,
  checkedTwo: false,
  checkedThree: false,
  checkedFour: false,
  checkedFive: false,
  checkedSix: false,
});

export default storiesOf('Components|List', module)
  .addParameters({ jest: ['List'] })
  .add('simple', () => (
    <Container>
      <Header title={'Simple text List'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <List style={{ width: 300 }}>
            <ListItem
              text={'Attractions'}
              icon={<Icon name={'insert-chart'} size={24} />}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              actionItem={
                <Checkbox
                  checkboxColor={'rgba(0, 0, 0, 0.54)'}
                  checked={state.checkedOne}
                  onPress={() => store.set({ checkedOne: !state.checkedOne })}
                />
              }
            />
            <ListItem
              style={{ paddingVertical: 12 }}
              text={'Dining'}
              icon={<Icon name={'insert-chart'} size={24} />}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
              actionItem={
                <Checkbox
                  checkboxColor={'rgba(0, 0, 0, 0.54)'}
                  checked={state.checkedTwo}
                  onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
                />
              }
            />
            <ListItem
              style={{ paddingVertical: 12 }}
              text={'Education'}
              icon={<Icon name={'insert-chart'} size={24} />}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
              actionItem={
                <Checkbox
                  checkboxColor={'rgba(0, 0, 0, 0.54)'}
                  checked={state.checkedThree}
                  onPress={() =>
                    store.set({ checkedThree: !state.checkedThree })
                  }
                />
              }
            />
            <ListItem
              style={{ paddingVertical: 12 }}
              text={'Health'}
              icon={<Icon name={'insert-chart'} size={24} />}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
              actionItem={
                <Checkbox
                  checkboxColor={'rgba(0, 0, 0, 0.54)'}
                  checked={state.checkedFour}
                  onPress={() => store.set({ checkedFour: !state.checkedFour })}
                />
              }
            />
            <ListItem
              style={{ paddingVertical: 12 }}
              text={'Family'}
              icon={<Icon name={'insert-chart'} size={24} />}
              onPress={() => store.set({ checkedFive: !state.checkedFive })}
              actionItem={
                <Checkbox
                  checkboxColor={'rgba(0, 0, 0, 0.54)'}
                  checked={state.checkedFive}
                  onPress={() => store.set({ checkedFive: !state.checkedFive })}
                />
              }
            />
            <ListItem
              style={{ paddingVertical: 12 }}
              text={'Office'}
              icon={<Icon name={'insert-chart'} size={24} />}
              onPress={() => store.set({ checkedSix: !state.checkedSix })}
              actionItem={
                <Checkbox
                  checkboxColor={'rgba(0, 0, 0, 0.54)'}
                  checked={state.checkedSix}
                  onPress={() => store.set({ checkedSix: !state.checkedSix })}
                />
              }
            />
          </List>
        )}
      </State>
    </Container>
  ))

  .add('with subheader', () => (
    <Container>
      <Header title={'List subheader'} />

      <List subheader={'Favorites'} style={{ width: 300 }}>
        <ListItem
          text={'Janet Perkins'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Mary Perkins'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Peter Carlsson'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Trevor Hansen'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
      </List>
    </Container>
  ));
