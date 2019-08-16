import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Icon from '../Icon/Icon';
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
  };
  render() {
    const {
      style,
      name,
      color,
      size,
      onPress,
      rippleColor,
      disabled,
      testID,
      ...rest
    } = this.props;
    let rippleColorImplemented = color ? color : 'rgb(0, 0, 0)';
    if (rippleColor) rippleColorImplemented = rippleColor;

    return (
      <Ripple
        rippleContainerBorderRadius={100}
        rippleColor={rippleColorImplemented}
        onPress={onPress}
        disabled={disabled}
        style={[
          {
            height: size + 8,
            width: size + 8,
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
        />
      </Ripple>
    );
  }
}

export default withTheme(IconButton);
