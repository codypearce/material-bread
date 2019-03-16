import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import withTheme from '../Theme/withTheme';
import Paper from './Paper';
import Ripple from '../Abstract/Ripple';
import Icon from './Icon';
class Chip extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    theme: PropTypes.object,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,

    type: PropTypes.string,

    color: PropTypes.string,
    colorType: PropTypes.string,

    onPress: PropTypes.func,
    onRight: PropTypes.func,
    onLeft: PropTypes.func,
    onDelete: PropTypes.func,

    text: PropTypes.string,
    textStyles: PropTypes.object,

    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    canDelete: PropTypes.bool,
  };

  static defaultProps = {
    visible: true,
    canDelete: false,
  };

  _renderText() {
    const {
      text,
      textStyles,
      leftIcon,
      rightIcon,
      canDelete,
      color,
      colorType,
      type,
      theme,
    } = this.props;

    let displayedColor = colorType || color ? 'white' : 'rgba(0, 0, 0, 0.87)';

    if (type == 'outlined' && (colorType || color))
      displayedColor = theme.base[colorType];

    return (
      <Text
        numberOfLines={1}
        style={[
          styles.text,
          {
            color: displayedColor,
            marginLeft: leftIcon ? 8 : 12,
            marginRight: rightIcon || canDelete ? 8 : 12,
          },
          textStyles,
        ]}>
        {text}
      </Text>
    );
  }

  _renderIcon(icon, onPress, position) {
    const { disabled, type } = this.props;

    if (!icon) return null;

    const inner = React.cloneElement(icon, {
      size: icon.props.size ? icon.props.size : 24,
    });

    let marginRight = type == 'outlined' ? 8 : 4;
    let marginLeft = type == 'outlined' ? 8 : 4;
    if (position == 'right') marginLeft = 0;
    if (position == 'left') marginRight = 0;

    return (
      <Ripple
        onPress={onPress}
        disabled={disabled || !onPress}
        rippleContainerBorderRadius={100}
        style={{
          marginRight,
          marginLeft,
        }}>
        {inner}
      </Ripple>
    );
  }

  _renderRightIcon() {
    const { rightIcon, onRight, canDelete } = this.props;

    if (canDelete) return this._renderDeleteIcon();
    return this._renderIcon(rightIcon, onRight, 'right');
  }

  _renderDeleteIcon() {
    const { onDelete, disabled, colorType, color, type, theme } = this.props;
    let iconColor = colorType || color ? 'white' : '#666666';
    if (type == 'outlined')
      iconColor = colorType ? theme.base[colorType] : '#666666';

    return (
      <Ripple
        onPress={onDelete}
        disabled={disabled || !onDelete}
        rippleContainerBorderRadius={100}
        style={{ marginRight: 8 }}>
        <Icon name="cancel" size={18} color={iconColor} />
      </Ripple>
    );
  }

  render() {
    const {
      type,
      disabled,
      onPress,
      style,
      color,
      colorType,
      children,
      visible,
      leftIcon,
      onLeft,
      theme,
    } = this.props;

    let borderWidth = 0;
    let displayBackgroundColor = colorType ? theme.base[colorType] : '#e0e0e0';
    let displayBorderColor = colorType
      ? theme.base[colorType]
      : 'rgba(0, 0, 0, 0.23)';
    let rippleColor = colorType ? theme.base[colorType] : 'rgba(0, 0, 0, .87)';

    if (type === 'outlined') {
      borderWidth = StyleSheet.hairlineWidth;
      displayBackgroundColor = 'transparent';
    }

    if (color) {
      displayBackgroundColor = color;
      displayBorderColor = color;
      rippleColor = color;
    }

    if (!visible) return null;
    return (
      <Paper
        style={[
          styles.container,
          {
            backgroundColor: displayBackgroundColor,
            borderColor: displayBorderColor,
            borderWidth,
          },
          style,
        ]}
        shadow={0}>
        <Ripple
          rippleContainerBorderRadius={16}
          onPress={onPress}
          disabled={disabled || !onPress}
          style={{ borderRadius: 16 }}
          rippleColor={rippleColor}>
          <View style={styles.content}>
            {this._renderIcon(leftIcon, onLeft, 'left')}
            {children ? children : this._renderText()}
            {this._renderRightIcon()}
          </View>
        </Ripple>
      </Paper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderStyle: 'solid',
    flexGrow: 0,
    height: 32,
    alignSelf: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 0,
  },

  text: {
    lineHeight: 24,
    textAlignVertical: 'center',
    marginVertical: 4,

    fontSize: 14,
  },
});

export default withTheme(Chip);
