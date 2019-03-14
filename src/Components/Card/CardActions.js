import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Button from '../Button/Button';

class CardActions extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    leftButtonLabel: PropTypes.string,
    leftOnPress: PropTypes.func,
    rightOnPress: PropTypes.func,
    rightButtonLabel: PropTypes.string,
  };

  render() {
    const {
      children,
      leftButtonLabel,
      leftOnPress,
      rightOnPress,
      rightButtonLabel,
      style,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.actions}>
          <Button onPress={leftOnPress}>{leftButtonLabel}</Button>
          <Button onPress={rightOnPress} style={styles.rightButton}>
            {rightButtonLabel}
          </Button>
        </View>
        <View style={styles.moreActions}>{children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    flexDirection: 'row',
  },
  rightButton: {
    marginLeft: 8,
  },
});

export default withTheme(CardActions);
