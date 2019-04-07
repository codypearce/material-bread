import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  render() {
    return (
      <View>
        <Searchbar
          label={'Label'}
          value={this.state.search}
          onChangeText={value => this.setState({ search: value })}
          onCloseIcon={() => this.setState({ search: '' })}
        />
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
