import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import {
  List,
  ListItem,
  Caption,
  IconButton,
} from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        checkedOne: true,
        checkedTwo: false
    }
  }
  render() {
    return (
      <List style={{ width: 300 }}>
        <ListItem
            leadingActionItem={<IconButton name="local-offer" size={24} color="#6e6e6e" />} 
            text={'Two Line'} 
            secondaryText={'Secondary Text'} 
            actionItem={<Caption>01</Caption>}
        />
        <ListItem
            leadingActionItem={<IconButton name="local-offer" size={24} color="#6e6e6e" />} 
            text={'Two Line'} 
            secondaryText={'Secondary Text'} 
            actionItem={<Caption>02</Caption>}
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
