import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '../../../';
import withTheme from '../../../Theme/withTheme';
import styles from './FrontLayerScrim.styles';

class FrontLayerScrim extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    backRevealed: PropTypes.bool,
    toggleLayout: PropTypes.func,
    animate: PropTypes.object,
  };

  render() {
    const { backRevealed, toggleLayout, animate } = this.props;

    if (!backRevealed) return null;

    return (
      <TouchableWithoutFeedback onPress={() => toggleLayout()}>
        <Animated.View style={[styles.scrimLayer, { opacity: animate }]}>
          <Icon
            name="expand-less"
            size={24}
            color="rgba(0,0,0,0.56)"
            style={styles.scrimLayerIcon}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withTheme(FrontLayerScrim);
