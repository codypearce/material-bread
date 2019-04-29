import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Menu, MenuItem, Button } from 'material-bread';

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
        <MenuItem text={'Menu item 1'} onPress={() => this.setState({ visible: false })} />
        <MenuItem text={'Menu item 2'} onPress={() => this.setState({ visible: false })} />
        <MenuItem text={'Menu item 3'} onPress={() => this.setState({ visible: false })} />
        <MenuItem text={'Menu item 4'} onPress={() => this.setState({ visible: false })} />
      </Menu>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
