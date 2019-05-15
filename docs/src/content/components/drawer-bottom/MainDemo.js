import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  DrawerBottom,
  Button,
  DrawerHeader,
  DrawerSection,
  DrawerItem,
} from '../../../../../src/';

export const code = `class MainDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        visible: false,
    }
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        <Button
          text="Open Drawer"
          onPress={() => {
            this.setState({ visible: true });
          }}
        />
        <DrawerBottom
          visible={this.state.visible}
          onBackdropPress={() => this.setState({ visible: false })}
          onSwipeDown={() => this.setState({ visible: false })}>
          <View>
            <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
            <DrawerSection>
              <DrawerItem text={'Inbox'} icon={'mail'} active />
              <DrawerItem text={'Outbox'} icon={'send'} />
              <DrawerItem text={'Favorites'} icon={'favorite'} />
            </DrawerSection>
          </View>
        </DrawerBottom>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="DrawerBottom" type="element" /> is a type of{' '}
        <CodeInline code="SheetBottom" type="element" />, specifically the{' '}
        <CodeInline code="modal" type="value" /> type. All the same props and
        usages apply.
      </div>
    }
    code={code}
    scope={{
      View,
      DrawerBottom,
      Button,
      DrawerHeader,
      DrawerSection,
      DrawerItem,
    }}
  />
);
export default MainDemo;
