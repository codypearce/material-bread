import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { List, ListItem, ListExpand, Icon } from '../../../../../src/index';

export const code = `class ListPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <List style={{ maxWidth: 300 }}>
        <ListExpand title={'Events'}>
          <ListItem text={'Attractions'} />
          <ListItem text={'Dining'} />
          <ListItem text={'Education'} />
          <ListItem text={'Health'} />
          <ListItem text={'Family'} />
          <ListItem text={'Office'} />
          <ListItem text={'Promotions'} />
        </ListExpand>
      </List>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        The <CodeInline code="ListExpand" type="element" /> component simply
        reveals more <CodeInline code="ListItem" type="element" />s on click.
        You must provide a <CodeInline code="title" type="prop" />.
      </div>
    }
    code={code}
    scope={{
      View,
      List,
      ListItem,
      ListExpand,
      Icon,
    }}
  />
);
export default MainDemo;
