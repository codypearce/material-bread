import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../Theme/withTheme';
import Icon from './Icon';
import Ripple from '../Abstract/Ripple';

class IconButton extends Component {
  static propTypes = {
    style: PropTypes.object,
    theme: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.number,
    name: PropTypes.string,
    onPress: PropTypes.func,
  };
  render() {
    const { style, name, color, size, onPress } = this.props;

    return (
      <Ripple
        rippleContainerBorderRadius={100}
        rippleColor={color ? color : 'rgb(0, 0, 0)'}
        onPress={onPress}
        style={{
          height: size * 1.3,
          width: size * 1.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name={name}
          color={color}
          size={size}
          style={{
            backgroundColor: 'transparent',
            ...style,
          }}
        />
      </Ripple>
    );
  }
}

export default withTheme(IconButton);
