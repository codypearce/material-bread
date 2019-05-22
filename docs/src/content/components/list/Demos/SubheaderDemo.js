import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { List, ListItem, Avatar } from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <List subheader={'Favorites'} style={{ maxWidth: 300 }}>
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
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Subheader'}
    sectionHref={`${pageHref}#subheader`}
    sectionId={'subheader'}
    code={code}
    scope={{ View, List, ListItem, Avatar }}
  />
);
export default SubtitleDemo;
