import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListExpanded,
} from '../../../../../src/index';

export const code = `class ListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <List>
        <ListItem>
          <ListItemIcon icon={'alarm'} />
          <ListItemText primary={'This is a list Item'} />
        </ListItem>
        <ListExpanded title="Expanded">
          <ListItem>
            <ListItemText primary={'This is a list Item'} />
          </ListItem>
          <ListItem>
            <ListItemText primary={'This is a list Item'} />
          </ListItem>
        </ListExpanded>
      </List>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Lists are built from other List Components. You can combine these components to create many different combinations.`}
    code={code}
    scope={{
      View,
      List,
      ListItem,
      ListItemIcon,
      ListItemText,
      ListExpanded,
      Image,
    }}
  />
);
export default MainDemo;
