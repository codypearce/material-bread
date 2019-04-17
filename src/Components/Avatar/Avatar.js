import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Icon from '../Icon/Icon';
import Ripple from '../Ripple/Ripple';

class Avatar extends Component {
  static propTypes = {
    style: PropTypes.object,
    theme: PropTypes.object,
    color: PropTypes.string,

    type: PropTypes.string,
    size: PropTypes.number,

    contentSize: PropTypes.number,
    contentColor: PropTypes.string,
    contentStyles: PropTypes.object,
    content: PropTypes.string,

    image: PropTypes.node,

    onPress: PropTypes.func,
    ripple: PropTypes.bool,

    children: PropTypes.node,
  };

  static defaultProps = {
    size: 24,
  };

  _renderImage() {
    const { image, size } = this.props;

    return React.cloneElement(image, {
      style: { width: size, height: size, borderRadius: size / 2 },
    });
  }

  _renderIcon() {
    const {
      content,
      contentSize,
      contentStyles,
      size,
      contentColor,
    } = this.props;

    return (
      <Icon
        name={content}
        size={contentSize ? contentSize : size / 1.5}
        style={contentStyles}
        color={contentColor}
      />
    );
  }

  _renderText() {
    const {
      content,
      contentColor,
      contentSize,
      contentStyles,
      size,
    } = this.props;

    return (
      <Text
        style={[
          {
            color: contentColor ? contentColor : 'white',
            fontSize: contentSize ? contentSize : size / 2,
          },
          contentStyles,
        ]}>
        {content}
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

  _renderAvatarContent() {
    const { style, color, size, children, theme, ...rest } = this.props;
    return (
      <View
        style={[
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color ? color : theme.primary.main,
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
        ]}
        {...rest}>
        {children ? children : this._renderItem()}
      </View>
    );
  }

  render() {
    const { onPress, ripple } = this.props;

    if (onPress) {
      return (
        <Ripple
          onPress={onPress}
          disable={!ripple}
          rippleContainerBorderRadius={100}>
          {this._renderAvatarContent()}
        </Ripple>
      );
    }

    return this._renderAvatarContent();
  }
}

export default withTheme(Avatar);
