import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Menu, MenuItem, Button } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import propData from '../../content/components/menu/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class MenuPage extends React.Component {
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

const usageCode = `import React, { Component } from 'react';
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

export default class MenuPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'menu'}
          title={'Menu'}
          description={`Menus display a list of choices on temporary surfaces.`}
          importCode={`import { Menu } from 'material-bread';`}
          docsLink={'https://material.io/design/components/menus.html'}
          componentDescription={`Menus are built with MenuItems and Buttons. Pass a button to activate the menu and it will attach to that component.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Menu,
            MenuItem,
            Button,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/menu#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
