import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Text, Platform } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './MenuItem.styles';
import { Ripple, Hoverable } from '../../../';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    icon: PropTypes.node,
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

  render() {
    const { children, disabled, onPress, style, textStyle, icon } = this.props;
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
            {children}
          </Text>
        </Ripple>
      </Hoverable>
    );
  }
}

export default withTheme(MenuItem);
