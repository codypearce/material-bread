import React from 'react';

import { List, ListItem, Icon, Avatar, Checkbox, IconButton } from '../../../';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  checkedOne: false,
  checkedTwo: false,
  checkedThree: false,
  checkedFour: false,
  checkedFive: false,
  selected: 2,
});

export default storiesOf('Components|List/ListItem', module)
  .addParameters({ jest: ['ListItem'] })
  .add('with text', () => (
    <Container>
      <Header title={'Text List'} />

      <List style={{ width: 300 }}>
        <ListItem text={'Attractions'} />
        <ListItem text={'Dining'} />
        <ListItem text={'Education'} />
        <ListItem text={'Health'} />
        <ListItem text={'Family'} />
        <ListItem text={'Office'} />
        <ListItem text={'Promotions'} />
      </List>
    </Container>
  ))
  .add('with icon', () => (
    <Container>
      <Header title={'Text and Icon List'} />

      <List style={{ width: 300 }}>
        <ListItem
          text={'Attractions'}
          icon={<Icon name={'local-movies'} size={24} />}
        />
        <ListItem
          text={'Dining'}
          icon={<Icon name={'local-dining'} size={24} />}
        />
        <ListItem text={'Education'} icon={<Icon name={'edit'} size={24} />} />
        <ListItem text={'Health'} icon={<Icon name={'favorite'} size={24} />} />
        <ListItem text={'Family'} icon={<Icon name={'group'} size={24} />} />
        <ListItem
          text={'Office'}
          icon={<Icon name={'content-cut'} size={24} />}
        />
        <ListItem
          text={'Promotions'}
          icon={<Icon name={'loyalty'} size={24} />}
        />
      </List>
    </Container>
  ))
  .add('with media', () => (
    <Container>
      <Header title={'Text and Media List'} />

      <List style={{ width: 300 }}>
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
  ))
  .add('with actionItem', () => (
    <Container>
      <Header title={'Text and Action Item List'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <List style={{ width: 300 }}>
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
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              actionItem={
                <Checkbox
                  checked={state.checkedOne}
                  onPress={() => store.set({ checkedOne: !state.checkedOne })}
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
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
              actionItem={
                <Checkbox
                  checked={state.checkedTwo}
                  onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
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
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
              actionItem={
                <Checkbox
                  checked={state.checkedThree}
                  onPress={() =>
                    store.set({ checkedThree: !state.checkedThree })
                  }
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
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
              actionItem={
                <Checkbox
                  checked={state.checkedFour}
                  onPress={() => store.set({ checkedFour: !state.checkedFour })}
                />
              }
            />
          </List>
        )}
      </State>
    </Container>
  ))
  .add('with leadingAction', () => (
    <Container>
      <Header title={'Text and Leading Action List'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <List style={{ width: 300 }}>
            <ListItem
              text={'Janet Perkins'}
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              actionItem={
                <IconButton name="comment" size={24} color="#6e6e6e" />
              }
              leadingActionItem={
                <Checkbox
                  checked={state.checkedOne}
                  onPress={() => store.set({ checkedOne: !state.checkedOne })}
                />
              }
            />
            <ListItem
              text={'Mary Perkins'}
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
              actionItem={
                <IconButton name="comment" size={24} color="#6e6e6e" />
              }
              leadingActionItem={
                <Checkbox
                  checked={state.checkedTwo}
                  onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
                />
              }
            />
            <ListItem
              text={'Peter Carlsson'}
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
              actionItem={
                <IconButton name="comment" size={24} color="#6e6e6e" />
              }
              leadingActionItem={
                <Checkbox
                  checked={state.checkedThree}
                  onPress={() =>
                    store.set({ checkedThree: !state.checkedThree })
                  }
                />
              }
            />
            <ListItem
              text={'Trevor Hansen'}
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
              actionItem={
                <IconButton name="comment" size={24} color="#6e6e6e" />
              }
              leadingActionItem={
                <Checkbox
                  checked={state.checkedFour}
                  onPress={() => store.set({ checkedFour: !state.checkedFour })}
                />
              }
            />
          </List>
        )}
      </State>
    </Container>
  ))
  .add('with secondary text', () => (
    <Container>
      <Header title={'Text and secondary text List'} />

      <List style={{ width: 300 }}>
        <ListItem
          text={'Photos'}
          secondaryText={'Jan 9, 2018'}
          media={
            <Avatar
              type="icon"
              content="folder"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
          actionItem={<IconButton name="error" size={24} color="#6e6e6e" />}
        />
        <ListItem
          text={'Recipes'}
          secondaryText={'Jan 17, 2018'}
          media={
            <Avatar
              type="icon"
              content="folder"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
          actionItem={<IconButton name="error" size={24} color="#6e6e6e" />}
        />
        <ListItem
          text={'Work'}
          secondaryText={'Jan 28, 2018'}
          media={
            <Avatar
              type="icon"
              content="folder"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
          actionItem={<IconButton name="error" size={24} color="#6e6e6e" />}
        />
        <ListItem
          text={'Vacation'}
          secondaryText={'Jan, 31, 2018'}
          media={
            <Avatar
              type="icon"
              content="folder"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
          actionItem={<IconButton name="error" size={24} color="#6e6e6e" />}
        />
      </List>
    </Container>
  ))
  .add('selected', () => (
    <Container>
      <Header title={'Selected Item'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <List style={{ width: 300 }}>
            <ListItem
              text={'Attractions'}
              icon={<Icon name={'local-movies'} size={24} />}
              onPress={() => store.set({ selected: 1 })}
              selected={state.selected == 1}
            />
            <ListItem
              text={'Dining'}
              icon={<Icon name={'local-dining'} size={24} />}
              onPress={() => store.set({ selected: 2 })}
              selected={state.selected == 2}
            />
            <ListItem
              text={'Education'}
              icon={<Icon name={'edit'} size={24} />}
              onPress={() => store.set({ selected: 3 })}
              selected={state.selected == 3}
            />
            <ListItem
              text={'Health'}
              icon={<Icon name={'favorite'} size={24} />}
              onPress={() => store.set({ selected: 4 })}
              selected={state.selected == 4}
            />
            <ListItem
              text={'Family'}
              icon={<Icon name={'group'} size={24} />}
              onPress={() => store.set({ selected: 5 })}
              selected={state.selected == 5}
            />
          </List>
        )}
      </State>
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      <Header title={'Text List'} />

      <List style={{ width: 300 }}>
        <ListItem text={'Attractions'} />
        <ListItem text={'Dining'} />
        <ListItem text={'Education'} disabled />
        <ListItem text={'Health'} />
        <ListItem text={'Family'} disabled />
        <ListItem text={'Office'} disabled />
        <ListItem text={'Promotions'} />
      </List>
    </Container>
  ));
