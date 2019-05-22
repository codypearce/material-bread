import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { List, ListItem, ListSection, Icon } from '../../../../../src/index';

export const code = `class ListPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <List style={{ maxWidth: 300 }}>
        <ListSection label={'Entertainment'}>
          <ListItem
            text={'Attractions'}
            icon={<Icon name={'local-movies'} size={24} />}
          />
          <ListItem
            text={'Dining'}
            icon={<Icon name={'local-dining'} size={24} />}
          />
        </ListSection>
        <ListSection label={'Home'}>
          <ListItem
            text={'Health'}
            icon={<Icon name={'favorite'} size={24} />}
          />
          <ListItem text={'Family'} icon={<Icon name={'group'} size={24} />} />
        </ListSection>
        <ListSection label={'Job'}>
          <ListItem
            text={'Education'}
            icon={<Icon name={'edit'} size={24} />}
          />
          <ListItem
            text={'Office'}
            icon={<Icon name={'content-cut'} size={24} />}
          />
          <ListItem
            text={'Promotions'}
            icon={<Icon name={'loyalty'} size={24} />}
          />
        </ListSection>
      </List>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="ListSection" type="element" /> is a convenient
        component for breaking lists into separate sections. They can have{' '}
        <CodeInline code="bottomDivider" type="prop" />,{' '}
        <CodeInline code="topDivider" type="prop" />,{' '}
        <CodeInline code="label" type="prop" />, or be{' '}
        <CodeInline code="inset" type="prop" />.
      </div>
    }
    code={code}
    scope={{
      View,
      List,
      ListItem,
      ListSection,
      Icon,
    }}
  />
);
export default MainDemo;
