import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import withTheme from '../Theme/withTheme';
import { shadow } from '../index';

class Paper extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    theme: PropTypes.object,
    elevation: PropTypes.number,
    radius: PropTypes.number,
  };
  render() {
    const { style, theme, children, elevation, radius, ...rest } = this.props;

    let shadows = shadow(4);
    if (elevation > 0 && elevation < 25) {
      shadows = shadow(elevation);
    }

    const borderRadius = radius ? radius : 2;

    return (
      <Animated.View
        style={{
          ...theme.paper,
          ...shadows,
          borderRadius,
          ...style,
        }}
        {...rest}>
        {children}
      </Animated.View>
    );
  }
}

export default withTheme(Paper);
