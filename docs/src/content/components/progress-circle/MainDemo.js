import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { ProgressCircle, Button } from '../../../../../src/index';

export const code = `class ProgressCircleDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circleValue3: 50
    }
  }
  render() {
    return (
      <View>
          <ProgressCircle color={'#E91E63'} />

          <ProgressCircle
            value={this.state.circleValue3}
            size={48}
            thickness={4}
            color="#2b80ff"
            unfilledColor="#f2f2f2"
            animationMethod="timing"
            animationConfig={{ speed: 1 }}
            shouldAnimateFirstValue
            determinate
          />

          <Button
            type="outlined"
            style={{ marginTop: 20 }}
            onPress={() => {
              this.setState({
                circleValue3: Math.floor(Math.random() * Math.floor(100)),
              });
            }}
            text={'Change Value'}
            />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Progress circles can be determinate or indeterminate. If determinate you must provide a value for the animation to stop at.`}
    code={code}
    scope={{ View, ProgressCircle, Button, Image }}
  />
);
export default MainDemo;
