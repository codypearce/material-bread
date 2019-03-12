import { Component } from 'react';
import { Dimensions } from 'react-native';

export default class LogDimensionChanges extends Component {
  state = Dimensions.get('window');
  handler = dims => this.setState(dims);

  componentWillMount() {
    Dimensions.addEventListener('change', this.handler);
  }

  componentWillUnmount() {
    // Important to stop updating state after unmount
    Dimensions.removeEventListener('change', this.handler);
  }

  render() {
    const { width, height } = this.state.window;
    const mode = height > width ? 'portrait' : 'landscape';
    console.log(`New dimensions ${width}x${height} (${mode})`);
    return null;
  }
}
