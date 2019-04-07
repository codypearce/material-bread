import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Menu, MenuItem, Button } from '../../../../../src/index';

export const code = `class MenuPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <View style={{marginBottom: 200}}>
        <Menu
          visible={this.state.visible}
          button={
            <Button
              text={'Show menu'}
              onPress={() => {
                this.setState({ visible: !this.state.visible });
              }}
              type="contained" />
          }>
          <MenuItem onPress={() => this.setState({ visible: false })}>
            Menu item 1
          </MenuItem>
          <MenuItem onPress={() => this.setState({ visible: false })}>
            Menu item 2
          </MenuItem>
          <MenuItem onPress={() => this.setState({ visible: false })} disabled>
            Menu item 3
          </MenuItem>
          <MenuItem onPress={() => this.setState({ visible: false })}>
            Menu item 2
          </MenuItem>
        </Menu>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Menu Items can content any content necesary, but usuallay content icons and text.`}
    code={code}
    scope={{ View, Menu, MenuItem, Button, Image }}
  />
);
export default MainDemo;
