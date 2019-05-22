import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { List, ListItem, Icon } from '../../../../../src/index';

export const code = `class ListPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <List style={{ maxWidth: 300 }}>
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
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="List" type="element" /> components are built using{' '}
        <CodeInline code="ListItem" type="element" />
        s, and <CodeInline code="ListSection" type="element" />
        s, and <CodeInline code="ListExpand" type="element" />. There are many
        combinations of these components, please see each components page or
        storybook for more demos.
      </div>
    }
    code={code}
    scope={{
      View,
      List,
      ListItem,
      Icon,
    }}
  />
);
export default MainDemo;
