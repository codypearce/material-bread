import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Icon from '../Icon';
import Ripple from '../Ripple';
import Badge from '../Badge';

import { BottomNavContext } from './BottomNavigation';

class BottomNavigationItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    icon: PropTypes.string,
    label: PropTypes.string,
    showLabel: PropTypes.bool,
    onPress: PropTypes.func,
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showLabels: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    badgeProps: PropTypes.object,
  };

  state = {
    scaleText: new Animated.Value(0),
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
    const { scaleText } = this.state;
    let scale = show ? 14 : 0;

    if (this.props.showLabels || this.props.showLabel) {
      scale = show ? 14 : 12;
    }

    Animated.parallel([
      Animated.timing(scaleText, {
        toValue: scale,
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

    if (handleChange) handleChange(value);
    if (onPress) onPress();
  };

  _renderWrapper(context) {
    const { active, children, style } = this.props;

    return (
      <Ripple
        style={[
          styles.bottomNavigationItem,
          { opacity: active ? 1 : 0.6 },
          style,
        ]}
        onPress={this.onChange}>
        {children ? children : this._renderContent(context)}
      </Ripple>
    );
  }

  _renderContent(context) {
    const { label, badgeProps } = this.props;
    let icon = this._renderIcon(context);

    if (badgeProps) {
      icon = (
        <Badge
          containerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            display: 'flex',
          }}
          style={[
            {
              right: badgeProps.right ? badgeProps.right : -5,
              top: badgeProps.top ? badgeProps.top : -5,
            },
          ]}
          {...badgeProps}>
          {this._renderIcon(context)}
        </Badge>
      );
    }
    return (
      <Fragment>
        {icon}
        {label ? this._renderText(context.backgroundColor) : null}
      </Fragment>
    );
  }

  _renderIcon(context) {
    const { icon } = this.props;
    return (
      <Icon
        name={icon}
        size={24}
        color={this._handleIconColor(context.backgroundColor)}
      />
    );
  }

  render() {
    return (
      <BottomNavContext.Consumer>
        {context => this._renderWrapper(context)}
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
    position: 'relative',
  },
});

export default withTheme(BottomNavigationItem);
