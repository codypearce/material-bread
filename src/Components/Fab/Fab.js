import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import withTheme from '../../Theme/withTheme';
import { Icon, Ripple, BodyText } from '../../';
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
    visible: PropTypes.bool,
    initialScale: PropTypes.number,
    animated: PropTypes.bool,
    label: PropTypes.string,
  };

  static defaultProps = {
    visible: true,
    icon: 'add',
  };

  state = {
    scale: new Animated.Value(0),
  };

  componentDidMount() {
    const { visible, animated } = this.props;

    if (visible && animated) {
      this._animate();
    } else if (visible) {
      this.setState({ scale: new Animated.Value(1) });
    }
  }

  componentDidUpdate(prevProps) {
    const { visible, animated } = this.props;

    if (visible != prevProps.visible && animated) {
      this._animate();
    }
  }

  _animate() {
    const { visible } = this.props;
    const { scale } = this.state;

    const scaleValue = visible ? 1 : 0;

    Animated.spring(scale, {
      toValue: scaleValue,
      speed: 7,
    }).start();
  }

  _renderContent() {
    const { icon, label } = this.props;

    return (
      <Fragment>
        {icon ? this._renderIcon() : null}
        {label ? this._renderLabel() : null}
      </Fragment>
    );
  }

  _renderLabel() {
    const { label, disabled } = this.props;

    return (
      <BodyText
        text={label}
        style={{
          color: disabled ? 'rgba(0, 0, 0, 0.26)' : 'white',
          fontSize: 14,
          marginLeft: 8,
        }}
      />
    );
  }

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
      label,
      ...props
    } = this.props;
    const { scale } = this.state;

    let backgroundColorApplied = backgroundColor
      ? backgroundColor
      : theme.primary.main;

    if (disabled) backgroundColorApplied = 'rgba(0, 0, 0, 0.12)';

    let size = mini ? 40 : 56;
    let width = size;
    if (label) {
      size = 48;
      width = 'auto';
    }

    return (
      <Animated.View style={{ transform: [{ scale: scale }], zIndex: 100 }}>
        <Ripple
          onPress={onPress}
          disabled={disabled}
          rippleColor={rippleColor ? rippleColor : 'rgba(0,0,0,.8)'}
          rippleContainerBorderRadius={100}
          style={[
            styles.button,
            {
              minHeight: size,
              minWidth: width,
              height: size,
              width: width,
              paddingHorizontal: label ? 12 : 0,
              backgroundColor: backgroundColorApplied,
            },
            shadowTool(disabled ? 0 : shadow || 10),
            style,
          ]}
          {...props}>
          {children ? children : this._renderContent()}
        </Ripple>
      </Animated.View>
    );
  }
}

export default withTheme(Fab);
