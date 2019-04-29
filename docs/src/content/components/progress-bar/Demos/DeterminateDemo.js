import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { ProgressBar, Button } from '../../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 10,
      visible: true
    }
  }
  render() {
    return (
      <View>    
        <ProgressBar
          determinate
          value={this.state.value}
          animationDuration={2000}
          visible={this.state.visible}
        />
        <Button
          type="outlined"
          style={{ marginTop: 20 }}
          text={' Change Value'}
          onPress={() => {
            this.setState({
              value: Math.floor(Math.random() * Math.floor(100)),
            });
          }}
        />

        <Button
          type="outlined"
          style={{ marginTop: 20 }}
          animationDuration={500}
          text={'Hide / Show Animate'}
          onPress={() => {
            this.setState({
              visible: !this.state.visible,
            });
          }}
        />
      </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Determinate'}
    sectionHref={`${pageHref}#determinate`}
    sectionId={'determinate'}
    code={code}
    description={'You must provide a value for the animation to stop at.'}
    scope={{ View, ProgressBar, Button }}
  />
);
export default SubtitleDemo;
