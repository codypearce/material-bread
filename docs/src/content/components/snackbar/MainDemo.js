import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Snackbar, Button } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <View >
        <Button type="outlined" onPress={() => this.setState({ show: true })} text={'Open Snackbar'} />
        <Snackbar
          visible={this.state.show}
          onButtonPress={() => this.setState({ show: false })}
          buttonLabel={'Ok'}>
          {'This is a snackbar component'}
        </Snackbar>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Snackbars will show at the bottom of the containing component.`}
    code={code}
    scope={{ View, Snackbar, Button, Image }}
  />
);
export default MainDemo;
