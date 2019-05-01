import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { ProgressCircle, Button } from '../../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        value: 10,
    }
  }
  render() {
    return (
      <View >    
        <ProgressCircle
            value={this.state.value}
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
                  value: Math.floor(Math.random() * Math.floor(100)),
                });
            }}
            text={'Change Value'}
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
    scope={{ View, ProgressCircle, Button }}
  />
);
export default SubtitleDemo;
