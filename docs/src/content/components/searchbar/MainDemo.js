import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Searchbar } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
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

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`The Searchbar component is a convenient component for displaying a full searchbar in an appbar. Usually this component is used on mobile.`}
    code={code}
    scope={{ View, Searchbar, Image }}
  />
);
export default MainDemo;
