import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Dropdown } from '../../../../../src/index';

export const code = `class DropdownPage extends React.Component {
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

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Dropdowns are convenient components for adding a menu attached to a component.`}
    code={code}
    scope={{ View, Dropdown, Image }}
  />
);
export default MainDemo;
