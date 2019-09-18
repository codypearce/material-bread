import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import styles from './Marker.styles';
import withTheme from '../../../Theme/withTheme';
import Ripple from '../../Ripple/Ripple.js';
import Hoverable from '../../../Utils/Hoverable/Hoverable.js';
import colorTool from 'color';

class Marker extends Component {
  static propTypes = {
    pressed: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    theme: PropTypes.object,
    onPress: PropTypes.func,
    markerSize: PropTypes.number,
  };

  state = {
    backgroundColorHover: 'transparent',
  };

  render() {
    const { disabled, color, theme, markerSize } = this.props;
    const { backgroundColorHover } = this.state;

    let backgroundColor = color ? color : theme.primary.main;
    if (disabled) backgroundColor = '#d3d3d3';

    return (
      <Hoverable
        onHoverIn={() =>
          this.setState({
            backgroundColorHover: colorTool(backgroundColor).alpha(0.3),
          })
        }
        onHoverOut={() =>
          this.setState({ backgroundColorHover: 'transparent' })
        }>
        <Ripple
          rippleColor={backgroundColor}
          style={[
            styles.ripple,
            {
              height: markerSize * 2.33,
              width: markerSize * 2.33,
              borderRadius: markerSize * 1.67,
            },
            { backgroundColor: backgroundColorHover },
          ]}
          rippleContainerBorderRadius={100}>
          <View
            style={[
              {
                backgroundColor: backgroundColor,
                height: markerSize,
                width: markerSize,
                borderRadius: markerSize,
              },
              disabled && styles.disabled,
            ]}
          />
        </Ripple>
      </Hoverable>
    );
  }
}

export default withTheme(Marker);
