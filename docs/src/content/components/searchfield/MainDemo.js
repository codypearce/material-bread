import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { SearchField } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  render() {
    return (
      <View >
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

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`SearchField is a convenient component for displaying a simple search component.`}
    code={code}
    scope={{ View, SearchField, Image }}
  />
);
export default MainDemo;
