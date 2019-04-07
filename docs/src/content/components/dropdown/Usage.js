import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
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

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
