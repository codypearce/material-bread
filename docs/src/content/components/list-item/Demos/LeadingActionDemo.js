import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import {
  List,
  ListItem,
  Avatar,
  Checkbox,
  IconButton,
} from '../../../../../../src/index';

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
              onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
              actionItem={
                <IconButton name="comment" size={24} color="#6e6e6e" />
              }
              leadingActionItem={
                <Checkbox
                  checked={this.state.checkedOne}
                  onPress={() => this.setState({ checkedOne: !this.state.checkedOne })}
                />
              }
            />
            <ListItem
              text={'Mary Perkins'}
              onPress={() => this.setState({ checkedTwo: !this.state.checkedTwo })}
              actionItem={
                <IconButton name="comment" size={24} color="#6e6e6e" />
              }
              leadingActionItem={
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
    sectionName={'Leading action'}
    sectionHref={`${pageHref}#leadingaction`}
    sectionId={'leadingaction'}
    code={code}
    scope={{ View, List, ListItem, Avatar, Checkbox, IconButton }}
  />
);
export default SubtitleDemo;
