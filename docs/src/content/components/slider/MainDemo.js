import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Slider } from '../../../../../src/';

export const code = `class Sliders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slider: 40,
      sliderTwo: 20
    }
  }
  render() {
    return (
      <View >
        <Slider
          values={[this.state.slider]}
          sliderLength={200}
          max={100}
          onValueChange={value => store.set({ slider: value })}
        />

        <Slider
          values={[this.state.sliderTwo]}
          sliderLength={200}
          max={100}
          disableOne={true}
          onValueChange={value => this.setState({ sliderTwo: value })}
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
        A <CodeInline code="Slider" type="element" /> can show with one marker
        or two markers. Two markers is called a Ranged slider.
      </div>
    }
    code={code}
    scope={{ View, Slider, Image }}
  />
);
export default MainDemo;
