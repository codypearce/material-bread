import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import {  Menu, MenuItem, Button } from 'material-bread';

class MenuPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
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
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
