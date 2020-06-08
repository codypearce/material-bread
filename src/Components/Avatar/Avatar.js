import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Icon from '../Icon/Icon';
import Ripple from '../Ripple/Ripple';
import { BodyText } from '../Typography';

class Avatar extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
    rippleProps: PropTypes.object,
    testID: PropTypes.string,

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

  _renderTypographyText() {
    const {
      content,
      contentColor,
      contentSize,
      contentStyles,
      size,
    } = this.props;

    return (
      <BodyText
        type={1}
        style={[
          {
            color: contentColor ? contentColor : 'white',
            fontSize: contentSize ? contentSize : size / 2,
          },
          contentStyles,
        ]}>
        {content}
      </BodyText>
    );
  }

  _renderItem() {
    const { type } = this.props;
    if (type == 'image') {
      return this._renderImage();
    } else if (type == 'icon') {
      return this._renderIcon();
    } else if (type == 'text') {
      return this._renderTypographyText();
    }
  }

  _renderAvatarContent() {
    const { style, color, size, children, theme } = this.props;
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
        ]}>
        {children ? children : this._renderItem()}
      </View>
    );
  }

  render() {
    const { onPress, ripple, rippleProps } = this.props;

    if (onPress) {
      return (
        <Ripple
          onPress={onPress}
          disable={!ripple}
          rippleContainerBorderRadius={100}
          {...rippleProps}>
          {this._renderAvatarContent()}
        </Ripple>
      );
    }

    return this._renderAvatarContent();
  }
}

export default withTheme(Avatar);
