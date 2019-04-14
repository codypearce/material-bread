import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import withTheme from '../../Theme/withTheme';
import { shadow } from '../../index';

class Paper extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
    shadow: PropTypes.number,
    radius: PropTypes.number,
  };
  render() {
    const { style, theme, children, shadow: userShadow, radius } = this.props;

    let shadows = shadow(4);
    if (userShadow > -1 && userShadow < 25) {
      shadows = shadow(userShadow);
    }

    const borderRadius = radius ? radius : 2;

    return (
      <Animated.View style={[theme.paper, shadows, { borderRadius }, style]}>
        {children}
      </Animated.View>
    );
  }
}

export default withTheme(Paper);
