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
    icon: PropTypes.string,
    shadow: PropTypes.number,
    mini: PropTypes.bool,
    theme: PropTypes.object,
  };
  render() {
    const {
      style,
      backgroundColor,
      onPress,
      disabled,
      rippleColor,
      icon,
      shadow,
      mini,
      theme,
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
        <Icon
          name={icon ? icon : 'add'}
          size={24}
          color={disabled ? 'rgba(0, 0, 0, 0.26)' : 'white'}
        />
      </Ripple>
    );
  }
}

export default withTheme(Fab);
