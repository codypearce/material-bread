import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { ProgressBar, Button } from '../../../../../src/index';

export const code = `class ProgressBarDemo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <ProgressBar visible />
        <ProgressBar
          visible
          indcatorStartPosition={100}
          trackStyle={{ marginTop: 20 }}
          color={'#E91E63'}
        />
        <ProgressBar
          visible
          indcatorStartPosition={100}
          trackStyle={{ marginTop: 20 }}
          color={'#009688'}
          animationDuration={4000}
          height={6}
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
        <CodeInline code="ProgressBar" type="element" />s can be{' '}
        <CodeInline code="determinate" type="value" /> or{' '}
        <CodeInline code="indeterminate" type="value" />. You can customize the
        height of the bar, the color of the track, color of the indicator and
        much more.
      </div>
    }
    code={code}
    scope={{ View, ProgressBar, Button, Image }}
  />
);
export default MainDemo;
