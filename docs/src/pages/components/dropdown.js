import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Dropdown } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import propData from '../../content/components/dropdown/propData';

const sections = [{ name: 'Demos' }];

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
