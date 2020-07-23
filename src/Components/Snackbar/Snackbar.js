import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, Text } from 'react-native';

import Paper from '../Paper/Paper';
import withTheme from '../../Theme/withTheme';
import styles from './Snackbar.styles';

class Snackbar extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    animationDuration: PropTypes.number,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    action: PropTypes.node,
    testID: PropTypes.string,
  };

  static defaultProps = {
    animationDuration: 200,
  };

  state = {
    scaleAnimation: new Animated.Value(0.8),
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    const { visible } = this.props;
    if (visible) this.show();
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;

    if (visible && !prevProps.visible) {
      this.show();
    } else if (!visible && prevProps.visible) {
      this.hide();
    }
  }

  show() {
    const { opacity, scaleAnimation } = this.state;
    const { animationDuration } = this.props;

    this.setState({
      show: false,
    });

    Animated.parallel([
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }),

      Animated.timing(opacity, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    ]).start();
  }

  hide() {
    const { opacity, scaleAnimation } = this.state;
    const { animationDuration } = this.props;

    Animated.parallel([
      Animated.timing(scaleAnimation, {
        toValue: 0.8,
        duration: animationDuration,
        useNativeDriver: true,
      }),

      Animated.timing(opacity, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    ]).start();
  }

  _renderAction() {
    const { action } = this.props;
    if (!action) return null;
    return <View style={styles.actions}>{action}</View>;
  }

  render() {
    const { children, style, visible, testID, action } = this.props;
    const { opacity, scaleAnimation } = this.state;

    return (
      <View
        style={[styles.container, { zIndex: visible ? 10 : -1 }]}
        testID={testID}>
        <Paper
          style={[
            styles.card,
            {
              opacity: opacity,
              transform: [
                {
                  scale: scaleAnimation,
                },
              ],
            },
            style,
          ]}>
          <Text style={[styles.text, { marginRight: action ? 0 : 8 }]}>
            {children}
          </Text>
          {this._renderAction()}
        </Paper>
      </View>
    );
  }
}

export default withTheme(Snackbar);
