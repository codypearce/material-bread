import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import { Text, Platform, View } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './MenuItem.styles';
import { Ripple, Hoverable } from '../../../';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    icon: PropTypes.node,
    keyboardCommand: PropTypes.node,
    text: PropTypes.string,
  };
  static defaultProps = {
    disabled: false,
    disabledTextColor: '#BDBDBD',
    underlayColor: '#E0E0E0',
  };
  state = {
    stateBackgroundColor: null,
  };
  handleHover(toggle) {
    const { disabled } = this.props;
    let implementedColor = toggle ? 'rgba(0,0,0,.12)' : null;
    if (disabled) implementedColor = null;

    this.setState({ stateBackgroundColor: implementedColor });
  }

  _renderIcon() {
    const { icon } = this.props;
    return React.cloneElement(icon, {
      size: 24,
      color: '#6e6e6e',
    });
  }

  _renderKeyboardCommand() {
    const { keyboardCommand } = this.props;
    return (
      <Fragment>
        <View style={{ flex: 1 }} />
        {keyboardCommand}
      </Fragment>
    );
  }

  _renderText() {
    const { disabled, textStyle, text, icon } = this.props;
    return (
      <Text
        ellipsizeMode={Platform.OS === 'ios' ? 'clip' : 'tail'}
        numberOfLines={1}
        style={[
          styles.title,
          {
            color: disabled ? 'rgba(0,0,0,.50)' : 'rgba(0,0,0,.87)',
            marginLeft: icon ? 20 : 0,
          },
          textStyle,
        ]}>
        {text}
      </Text>
    );
  }

  render() {
    const {
      children,
      disabled,
      onPress,
      style,
      icon,
      keyboardCommand,
    } = this.props;
    const { stateBackgroundColor } = this.state;

    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}>
        <Ripple
          disabled={disabled}
          onPress={onPress}
          style={[
            styles.container,
            { backgroundColor: stateBackgroundColor },
            style,
          ]}>
          {icon ? this._renderIcon() : null}
          {children ? children : this._renderText()}
          {keyboardCommand ? this._renderKeyboardCommand() : null}
        </Ripple>
      </Hoverable>
    );
  }
}

export default withTheme(MenuItem);
