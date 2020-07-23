import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Animated } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './Undrline.styles';

class Underline extends Component {
  static propTypes = {
    color: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Animated.Value),
    ]),
    tabWidth: PropTypes.number,
    underlineHeight: PropTypes.number,
  };

  static defaultProps = {
    underlineHeight: 2,
  };

  render() {
    const { tabWidth, color, value, underlineHeight } = this.props;

    return (
      <Animated.View
        useNativeDriver={true}
        style={[
          styles.underline,
          {
            width: tabWidth,
            backgroundColor: color,
            transform: [{ translateX: value }],
            height: underlineHeight,
          },
        ]}
      />
    );
  }
}

export default withTheme(Underline);
