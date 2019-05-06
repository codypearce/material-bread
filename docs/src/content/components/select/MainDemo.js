import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Select } from '../../../../../src/';

export const code = `class DropdownPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedItem: '',
        selectedItemTwo: '',
        selectedItemThree: ''
    }
  }
  render() {
    const data = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ];
    return (
      <View >
        <Select
          label={'Select'}
          menuItems={data}
          onSelect={value => this.setState({ selectedItem: value.name })}
          selectedItem={this.state.selectedItem}
        />
        <Select
          label={'Select'}
          type={'filled'}
          menuItems={data}
          onSelect={value => this.setState({ selectedItemTwo: value.name })}
          selectedItem={this.state.selectedItemTwo}
        />
        <Select
          label={'Select'}
          type={'outlined'}
          menuItems={data}
          onSelect={value => this.setState({ selectedItemThree: value.name })}
          selectedItem={this.state.selectedItemThree}
        />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="Select" type="element" /> or Exposed Menus allow
        selecting an item from a dropdown. The base component is built from the{' '}
        <CodeInline code="Menu" type="element" /> and{' '}
        <CodeInline code="TextField" type="element" /> components. You can pass
        any props down to them using <CodeInline code="menuProps" type="prop" />{' '}
        and <CodeInline code="textFieldProps" type="prop" />.
      </div>
    }
    code={code}
    scope={{ View, Select, Image }}
  />
);
export default MainDemo;
