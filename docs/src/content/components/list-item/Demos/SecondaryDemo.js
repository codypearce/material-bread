import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import {
  List,
  ListItem,
  Caption,
  IconButton,
} from '../../../../../../src/index';

export const code = `class Page extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <List style={{ maxWidth: 300 }}>
        <ListItem
            leadingActionItem={<IconButton name="local-offer" size={24} color="#6e6e6e" />} 
            text={'Two Line'} 
            secondaryText={'Secondary Text'} 
            actionItem={<Caption text={'01'} />}
        />
        <ListItem
            leadingActionItem={<IconButton name="local-offer" size={24} color="#6e6e6e" />} 
            text={'Two Line'} 
            secondaryText={'Secondary Text'} 
            actionItem={<Caption text={'02'} />}
        />
      </List>
          
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Secondary Text'}
    sectionHref={`${pageHref}#secondary`}
    sectionId={'secondary'}
    code={code}
    scope={{ View, List, ListItem, Caption, IconButton }}
  />
);
export default SubtitleDemo;
