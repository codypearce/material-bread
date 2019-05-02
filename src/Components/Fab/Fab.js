import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../Theme/withTheme';
import Ripple from '../Ripple/Ripple';
import Icon from '../Icon/Icon';
import shadowTool from '../../Utils/Shadow/shadow';
import styles from './Fab.styles';

export class Fab extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    rippleColor: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    shadow: PropTypes.number,
    mini: PropTypes.bool,
    theme: PropTypes.object,
    children: PropTypes.node,
  };

  _renderIcon() {
    const { disabled, icon } = this.props;

    const color = disabled ? 'rgba(0, 0, 0, 0.26)' : 'white';
    if (typeof icon == 'string' || icon instanceof String || !icon) {
      return <Icon name={icon ? icon : 'add'} size={24} color={color} />;
    } else {
      return React.cloneElement(icon, {
        size: icon.props.size ? icon.props.size : 24,
        color: icon.props.color ? icon.props.color : color,
      });
    }
  }

  render() {
    const {
      style,
      backgroundColor,
      onPress,
      disabled,
      rippleColor,
      shadow,
      mini,
      theme,
      children,
      ...props
    } = this.props;

    let backgroundColorApplied = backgroundColor
      ? backgroundColor
      : theme.primary.main;

    if (disabled) backgroundColorApplied = 'rgba(0, 0, 0, 0.12)';

    return (
      <Ripple
        onPress={onPress}
        disabled={disabled}
        rippleColor={rippleColor ? rippleColor : 'rgba(0,0,0,.8)'}
        rippleContainerBorderRadius={100}
        style={[
          styles.button,
          {
            height: mini ? 40 : 56,
            width: mini ? 40 : 56,
            backgroundColor: backgroundColorApplied,
          },
          shadowTool(disabled ? 0 : shadow || 10),
          style,
        ]}
        {...props}>
        {children ? children : this._renderIcon()}
      </Ripple>
    );
  }
}

export default withTheme(Fab);
