import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
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
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProgressCircle  />
        <ProgressCircle color={'#03A9F4'} animationDuration={1200} />
        <ProgressCircle color={'#E91E63'} animationDuration={3800} />
        <ProgressCircle color={'#009688'} animationDuration={4800} />
    </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="ProgressCircle" type="element" />s can be{' '}
        <CodeInline code="determinate" type="value" /> or{' '}
        <CodeInline code="indeterminate" type="value" />. You can customize the
        size of the circle, the color of the track, color of the indicator and
        much more.
      </div>
    }
    code={code}
    scope={{ View, ProgressCircle, Button, Image }}
  />
);
export default MainDemo;
