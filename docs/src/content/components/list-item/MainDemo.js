import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { List, ListItem, IconButton, Avatar } from '../../../../../src/index';

export const code = `class ListPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <List style={{ maxWidth: 300 }}>
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
      </List>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="ListItem" type="element" />s can have{' '}
        <CodeInline code="text" type="prop" />,{' '}
        <CodeInline code="icon" type="prop" />,{' '}
        <CodeInline code="media" type="prop" />,{' '}
        <CodeInline code="actionItem" type="prop" />,{' '}
        <CodeInline code="leadingItem" type="prop" />, or{' '}
        <CodeInline code="secondaryText" type="prop" />. If you want more custom
        you can pass in children to replace text with anything.
      </div>
    }
    code={code}
    scope={{
      View,
      List,
      ListItem,
      IconButton,
      Avatar,
    }}
  />
);
export default MainDemo;
