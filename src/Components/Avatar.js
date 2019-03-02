import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import withTheme from '../Theme/withTheme';
import Icon from './Icon';

class Avatar extends Component {
  static propTypes = {
    style: PropTypes.object,
    theme: PropTypes.object,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    size: PropTypes.number,
    children: PropTypes.node,
    type: PropTypes.string,
    image: PropTypes.node,
    icon: PropTypes.string,
    text: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    fontSize: PropTypes.string,
    styles: PropTypes.object,
  };

  _renderImage() {
    const { image, size } = this.props;

    return (
      <Image
        source={image}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    );
  }

  _renderIcon() {
    const { icon, iconSize, iconColor, size } = this.props;

    return (
      <Icon
        name={icon}
        size={iconSize ? iconSize : size / 1.5}
        color={iconColor}
      />
    );
  }

  _renderText() {
    const { text, textColor, fontSize, size, styles } = this.props;

    return (
      <Text
        style={[
          {
            color: textColor ? textColor : 'white',
            fontSize: fontSize ? fontSize : size / 2,
          },
          styles,
        ]}>
        {text}
      </Text>
    );
  }

  _renderItem() {
    const { type } = this.props;
    if (type == 'image') {
      return this._renderImage();
    } else if (type == 'icon') {
      return this._renderIcon();
    } else if (type == 'text') {
      return this._renderText();
    }
  }

  render() {
    const {
      style,
      backgroundColor,
      textColor,
      size,
      children,
      ...rest
    } = this.props;

    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor ? backgroundColor : '#bdbdbd',
          color: textColor,
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
        {...rest}>
        {children ? children : this._renderItem()}
      </View>
    );
  }
}

export default withTheme(Avatar);
