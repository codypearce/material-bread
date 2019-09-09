import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Divider, List, ListItem, Avatar } from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <List subheader={'Favorites'} style={{ width: 300 }}>
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
        <Divider insetLeft={20} />
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

const SubtitleDemo = ({ pageHref }) => (
  <ComponentDemo
    sectionName={'InsetLeft'}
    sectionHref={`${pageHref}#insetleft`}
    sectionId={'insetleft'}
    code={code}
    description={
      <div>
        <CodeInline code="insetLeft" type="prop" /> shortens the width of the
        divider by the provided amount and moves the{' '}
        <CodeInline code="Divider" type="element" /> to the right by that
        amount. This is useful for keeping the{' '}
        <CodeInline code="Divider" type="element" /> inline with other elements.
      </div>
    }
    scope={{ View, Divider, List, ListItem, Avatar }}
  />
);
export default SubtitleDemo;
