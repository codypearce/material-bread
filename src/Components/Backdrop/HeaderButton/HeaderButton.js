import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import { Icon, Ripple } from '../../../';
import withTheme from '../../../Theme/withTheme';
import styles from './HeaderButton.styles';

class HeaderButton extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    headerButtonStyle: PropTypes.object,
    toggleLayout: PropTypes.func,
    backConcealed: PropTypes.bool,
    iconName: PropTypes.string,
  };

  spinValue = new Animated.Value(0);

  _handleSpin() {
    const { backConcealed, toggleLayout } = this.props;
    toggleLayout();
    Animated.timing(this.spinValue, {
      toValue: 0.5,
      duration: 94,
      easing: Easing.linear,
    }).start(() => {
      Animated.timing(this.spinValue, {
        toValue: backConcealed ? 1 : 0,
        duration: 94,
        easing: Easing.linear,
      }).start();
    });
  }

  render() {
    const { headerButtonStyle, iconName } = this.props;

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['180deg', '0deg'],
    });
    const style = [
      styles.container,
      headerButtonStyle,
      { transform: [{ rotate: spin }] },
    ];

    return (
      <Animated.View style={style}>
        <Ripple
          rippleContainerBorderRadius={100}
          onPress={() => this._handleSpin()}
          style={styles.ripple}>
          <Icon name={iconName} size={24} color="white" style={styles.icon} />
        </Ripple>
      </Animated.View>
    );
  }
}

export default withTheme(HeaderButton);
