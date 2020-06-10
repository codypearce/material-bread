import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Icon from '../Icon/Icon';
import Color from 'color';
import Ripple from '../Ripple/Ripple';

class IconButton extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.number,
    name: PropTypes.string,
    onPress: PropTypes.func,
    rippleColor: PropTypes.string,
    disabled: PropTypes.bool,
    testID: PropTypes.string,
    iconComponent: PropTypes.func,
  };

  state = {
    stateBackgroundColor: null,
  };

  getRippleColor() {
    const { color, theme, rippleColor } = this.props;
    let implementedRippleColor = color ? color : theme.primary.main;

    implementedRippleColor = Color(color)
      .alpha(0.12)
      .rgb()
      .string();

    return rippleColor ? rippleColor : implementedRippleColor;
  }

  render() {
    const {
      style,
      name,
      color,
      size,
      onPress,
      disabled,
      testID,
      iconComponent,
      ...rest
    } = this.props;

    return (
      <Ripple
        rippleContainerBorderRadius={100}
        rippleColor={this.getRippleColor()}
        onPress={onPress}
        disabled={disabled}
        style={[
          {
            height: size,
            width: size,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}
        testID={testID}
        {...rest}>
        <Icon
          name={name}
          color={color}
          size={size}
          style={{
            backgroundColor: 'transparent',
          }}
          iconComponent={iconComponent}
        />
      </Ripple>
    );
  }
}

export default withTheme(IconButton);
