import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchField } from 'material-bread';

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
        <SearchField 
          color={'#E91E63'}
          value={this.state.search}
          onChangeText={(search) => this.setState({search})}
          onCloseIcon={() => this.setState({search: ''})}
        />
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
