import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { ProgressCircle, Button } from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        circleValue3: 10,
    }
  }
  render() {
    return (
      <View >    
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
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Determinate'}
    sectionHref={`${pageHref}#determinate`}
    sectionId={'determinate'}
    code={code}
    scope={{ View, ProgressCircle, Button }}
  />
);
export default SubtitleDemo;
