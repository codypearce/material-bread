import React, { Component } from 'react';
import { View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Dropdown } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [{ name: 'Demos' }];

const propData = [
  createPropData('buttonStyle', 'Styles for button', 'object', ''),
  createPropData('label', 'Text for button', 'string', ''),
  createPropData('menuItems', 'Items to display in dropdown', 'array', ''),
  createPropData(
    'onSelect',
    'Callback when selecting new menu item',
    'func',
    '',
  ),
  createPropData('selectedItem', 'Item currently selected', 'string', ''),
  createPropData('style', 'Styles root element', 'object', ''),
  createPropData('visible', 'Whether menu is visible', 'bool', ''),
];

const liveEditCode = `
class DropdownPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          selectedItem: ''
      }
    }
    render() {
      const data = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
      ];
      return (
        <View style={{marginBottom: 80}}>
          <Dropdown
            label={'Dropdown'}
            menuItems={data}
            onSelect={value => this.setState({ selectedItem: value.name })}
            selectedItem={this.state.selectedItem}
          />
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { Dropdown } from 'material-bread';

class DropdownPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedItem: ''
    }
  }
  render() {
    const data = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ];
    return (
      <Dropdown
        label={'Dropdown'}
        menuItems={data}
        onSelect={value => this.setState({ selectedItem: value.name })}
        selectedItem={this.state.selectedItem}
      />
    );
  }
}`;

export default class DropdownPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dropdown'}
          title={'Dropdown'}
          description={`Exposed dropdown menus display the currently selected menu item above the menu.`}
          importCode={`import { Dropdown } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/menus.html#exposed-dropdown-menu'
          }
          componentDescription={`Dropdowns are convenient components for adding a menu attached to a component.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Dropdown,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/dropdown#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
