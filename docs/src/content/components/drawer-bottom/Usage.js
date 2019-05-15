import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { DrawerBottom, Button,  DrawerHeader, DrawerSection, DrawerItem, } from 'material-bread';

class SelectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        visible: false
    }
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        <Button
          text="Open Sheet"
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
            <DrawerSection bottomDivider>
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

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
