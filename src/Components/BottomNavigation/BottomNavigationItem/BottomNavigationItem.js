import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import Icon from '../../Icon/Icon';
import Ripple from '../../Ripple/Ripple';
import Badge from '../../Badge/Badge';
import { BottomNavContext } from '../BottomNavigation';
import styles from './BottomNavigationItem.styles';

class BottomNavigationItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    icon: PropTypes.string,
    label: PropTypes.string,
    showOneItem: PropTypes.bool,
    onPress: PropTypes.func,
    handleChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showLabel: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    badgeProps: PropTypes.object,
    rippleProps: PropTypes.object,
    testID: PropTypes.string,
    isLandscape: PropTypes.bool,
    onItemLayout: PropTypes.func,
    maxWidth: PropTypes.number,
    horizontal: PropTypes.bool,
  };

  static defaultProps = {
    showLabel: true,
  };

  state = {
    scaleText: new Animated.Value(0),
  };

  componentDidMount() {
    const { showOneItem, showLabel, active } = this.props;
    if (showOneItem || active || showLabel) {
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
    let scale = show ? 12 : 0;

    if (this.props.showLabel || this.props.showOneItem) {
      scale = show ? 12 : 10;
    }

    Animated.parallel([
      Animated.timing(scaleText, {
        toValue: scale,
        duration: 150,
      }),
    ]).start();
  }

  _renderText(containerColor) {
    const {
      isLandscape,
      horizontal,
      showOneItem,
      showLabel,
      active,
      icon,
    } = this.props;
    const isHorizontal = isLandscape && horizontal;
    const showOneItemsWithoutDefault = !showOneItem;
    const showActiveLabel = showOneItem && active;

    let color = 'white';
    if (containerColor == 'white' || containerColor == '#fff')
      color = '#DADADA';

    const { label } = this.props;
    let activeLabel = label;

    if (!showOneItemsWithoutDefault && !showActiveLabel) {
      activeLabel = '';
    }

    return (
      <Animated.Text
        style={{
          color: color,
          fontSize: this.state.scaleText,
          marginLeft: isHorizontal && showLabel && icon ? 12 : 0,
        }}>
        {activeLabel}
      </Animated.Text>
    );
  }

  _handleIconColor(containerColor) {
    if (containerColor == 'white' || containerColor == '#fff') {
      return '#DADADA';
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
    const {
      active,
      children,
      style,
      testID,
      rippleProps,
      isLandscape,
      maxWidth,
      horizontal,
      showOneItem,
    } = this.props;

    const actualMaxWidth = Math.min(maxWidth, 192);
    let opacity = showOneItem ? 1 : 0.6;

    return (
      <Ripple
        style={[
          styles.bottomNavigationItem,
          { opacity: active ? 1 : opacity },
          isLandscape &&
            !horizontal && [
              styles.bottomNavigationItemLandscape,
              { maxWidth: actualMaxWidth },
            ],
          isLandscape &&
            horizontal && {
              flexDirection: 'row',
              paddingHorizontal: 12,
            },
          style,
        ]}
        onPress={this.onChange}
        testID={testID}
        {...rippleProps}>
        {children ? children : this._renderContent(context)}
      </Ripple>
    );
  }

  _renderContent(context) {
    const { label, badgeProps, icon } = this.props;
    let iconImplemented = this._renderIcon(context);

    if (badgeProps) {
      iconImplemented = (
        <Badge
          containerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            display: 'flex',
          }}
          style={[
            {
              right: badgeProps.right ? badgeProps.right : -4,
              top: badgeProps.top ? badgeProps.top : -4,
            },
          ]}
          {...badgeProps}>
          {this._renderIcon(context)}
        </Badge>
      );
    }
    return (
      <Fragment>
        {icon ? iconImplemented : null}
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

export default withTheme(BottomNavigationItem);
