import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Slider, Icon } from '../../../../../../src/index';

export const code = `class Sliders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slider: 40,
      sliderTwo: 80
    }
  }
  render() {
    return (
      <View >
        <Slider
          values={[this.state.slider, this.state.sliderTwo]}
          sliderLength={200}
          max={100}
          onValueChange={value => store.set({ slider: value })}
        />

        <Slider
          values={[this.state.slider, this.state.sliderTwo]}
          sliderLength={200}
          max={100}
          disableOne={true}
          onValueChange={value => this.setState({ sliderTwo: value })}
        />

        <Slider
          values={[this.state.slider, this.state.sliderTwo]}
          sliderLength={200}
          max={100}
          disableOne={true}
          disableTwo={true}
          onValueChange={value => this.setState({ sliderTwo: value })}
        />
      </View>
    );
  }
}`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Ranged Sliders'}
    sectionHref={`${pageHref}#ranged`}
    sectionId={'ranged'}
    code={code}
    scope={{ View, Slider, Icon }}
  />
);
export default SubtitleDemo;
