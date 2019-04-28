import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Select } from '../../../../../src/';

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
        <Select
          label={'Select'}
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
    description={`Select or Exposed Menu's are components that allow you to select an item as input.`}
    code={code}
    scope={{ View, Select, Image }}
  />
);
export default MainDemo;
