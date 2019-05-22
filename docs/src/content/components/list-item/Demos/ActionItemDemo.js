import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { List, ListItem, Avatar, Checkbox } from '../../../../../../src/index';

export const code = `class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        checkedOne: true,
        checkedTwo: false
    }
  }
  render() {
    return (
        <List style={{ maxWidth: 300 }}>
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
              onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
              actionItem={
                <Checkbox
                  checked={this.state.checkedOne}
                  onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
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
              onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
              actionItem={
                <Checkbox
                  checked={this.state.checkedTwo}
                  onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
                />
              }
            />
        </List>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Action Item'}
    sectionHref={`${pageHref}#actionitem`}
    sectionId={'actionitem'}
    code={code}
    scope={{ View, List, ListItem, Avatar, Checkbox }}
  />
);
export default SubtitleDemo;
