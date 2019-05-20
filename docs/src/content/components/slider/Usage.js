import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { Slider } from 'material-bread';

class Sliders extends React.Component {
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

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
