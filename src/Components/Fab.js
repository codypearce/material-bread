import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import withTheme from '../Theme/withTheme';
import Ripple from './Ripple';
import Icon from './Icon';
import shadow from '../Utils/shadow';

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
    elevation: PropTypes.number,
  };
  render() {
    const {
      style,
      backgroundColor,
      onPress,
      disabled,
      rippleColor,
      icon,
      elevation,
      ...props
    } = this.props;

    return (
      <Ripple
        onPress={onPress}
        disabled={disabled}
        rippleColor={rippleColor ? rippleColor : 'rgba(0,0,0,.8)'}
        rippleContainerBorderRadius={100}
        style={[
          styles.button,
          {
            backgroundColor: backgroundColor
              ? backgroundColor
              : 'rgba(33, 150, 243, 1)',
          },
          shadow(elevation || 10),
          style,
        ]}
        {...props}>
        <Icon name={icon ? icon : 'add'} size={24} color={'white'} />
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: 56,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  icon: {
    width: 16,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default withTheme(Fab);
