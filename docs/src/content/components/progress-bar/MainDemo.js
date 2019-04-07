import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { ProgressBar, Button } from '../../../../../src/index';

export const code = `class ProgressBarDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible2: true,
      value2: 50
    }
  }
  render() {
    return (
      <View>
        <ProgressBar
          value={50}
          animationDuration={2000}
          trackStyle={{ marginTop: 40 }}
          visible
        />
        <ProgressBar
          determinate
          value={this.state.value2}
          animationDuration={2000}
          trackStyle={{ marginTop: 40 }}
          visible={this.state.visible2}
        />
        <Button
          type="outlined"
          style={{ marginTop: 20 }}
          onPress={() => {
            this.setState({
              value2: Math.floor(Math.random() * Math.floor(100)),
            });
          }}
          text={'Change Value'}
        />

        <Button
          type="outlined"
          style={{ marginTop: 20 }}
          animationDuration={500}
          onPress={() => {
            this.setState({
              visible2: !this.state.visible2,
            });
          }}
          text={'Hide / Show Animate'}
        />
         
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Progress bars can be determinate or indeterminate. If determinate you must provide a value for the animation to stop at.`}
    code={code}
    scope={{ View, ProgressBar, Button, Image }}
  />
);
export default MainDemo;
