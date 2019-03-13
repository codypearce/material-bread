import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Icon from '../Icon';
import Ripple from '../../Abstract/Ripple';

import { BottomNavContext } from './BottomNavigation';

class BottomNavigationItem extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    icon: PropTypes.string,
    label: PropTypes.string,
    showLabel: PropTypes.bool,
    onPress: PropTypes.func,
    handleChange: PropTypes.func,
    value: PropTypes.bool,
    showLabels: PropTypes.bool,
  };

  state = {
    scaleText: new Animated.Value(0),
    iconPosition: new Animated.Value(0),
  };

  componentDidMount() {
    const { showLabel, showLabels, active } = this.props;
    if (showLabel || active || showLabels) {
      this._animateActive(true);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.active && this.props.active) {
      this._animateActive(true);
    } else if (prevProps.active && !this.props.active) {
      this._animateActive(false);
    }
  }

  _animateActive(show) {
    const { scaleText, iconPosition } = this.state;
    let scale = show ? 14 : 0;
    let position = show ? 0 : 0;

    if (this.props.showLabels || this.props.showLabel) {
      scale = show ? 14 : 12;
      position = show ? 0 : 2;
    }

    Animated.parallel([
      Animated.timing(scaleText, {
        toValue: scale,
        duration: 150,
      }),
      Animated.timing(iconPosition, {
        toValue: position,
        duration: 150,
      }),
    ]).start();
  }

  _renderText(containerColor) {
    let color = 'white';

    if (containerColor == 'white' || containerColor == '#fff')
      color = '#2196f3';

    const { label } = this.props;
    return (
      <Animated.Text
        style={{
          color: color,
          fontSize: this.state.scaleText,
          // transform: [{ scaleX: this.state.scaleText }],
        }}>
        {label}
      </Animated.Text>
    );
  }

  _handleIconColor(containerColor) {
    if (containerColor == 'white' || containerColor == '#fff') {
      return '#2196f3';
    } else {
      return 'white';
    }
  }

  onChange = () => {
    const { handleChange, onPress, value } = this.props;

    handleChange(value);
    if (onPress) onPress();
  };

  render() {
    const { active, icon, label } = this.props;
    const { iconPosition } = this.state;

    return (
      <BottomNavContext.Consumer>
        {context => (
          <Ripple
            style={[styles.bottomNavigationItem, { opacity: active ? 1 : 0.6 }]}
            onPress={this.onChange}>
            <Animated.View
              style={{ transform: [{ translateY: iconPosition }] }}>
              <Icon
                name={icon}
                size={24}
                color={this._handleIconColor(context.backgroundColor)}
              />
            </Animated.View>

            {label ? this._renderText(context.backgroundColor) : null}
          </Ripple>
        )}
      </BottomNavContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavigationItem: {
    minWidth: 80,
    maxWidth: 168,
    height: 56,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default withTheme(BottomNavigationItem);
