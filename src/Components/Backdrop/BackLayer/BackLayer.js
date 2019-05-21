import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './BackLayer.styles';

class BackLayer extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    backLayerConcealed: PropTypes.node,
    backLayerRevealed: PropTypes.node,
    backRevealed: PropTypes.bool,
    animate: PropTypes.object,
    internalAnimate: PropTypes.object,
  };

  renderBackLayerConcealed = () => {
    const { backLayerConcealed, backRevealed, animate } = this.props;

    if (!backLayerConcealed || backRevealed) {
      return null;
    }
    const md = backRevealed ? 0 : 1;
    const opacity = animate.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [1, md, 0],
    });

    return (
      <Animated.View style={[styles.backLayer, { opacity }]}>
        {backLayerConcealed}
      </Animated.View>
    );
  };

  renderBackLayerRevealed = () => {
    const { backLayerRevealed, backRevealed, animate } = this.props;
    if (!backLayerRevealed || !backRevealed) {
      return null;
    }
    const md = backRevealed ? 1 : 0;
    const opacity = animate.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [0, md, 1],
    });

    return (
      <Animated.View style={[styles.backLayer, { opacity }]}>
        {this.renderBackElements()}
      </Animated.View>
    );
  };

  renderBackElements = () => {
    const { backLayerRevealed, internalAnimate } = this.props;

    const opacity = internalAnimate.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0, 1],
    });

    return (
      <Animated.View style={{ flex: 1, opacity }}>
        {backLayerRevealed}
      </Animated.View>
    );
  };

  render() {
    return (
      <Fragment>
        {this.renderBackLayerConcealed()}
        {this.renderBackLayerRevealed()}
      </Fragment>
    );
  }
}

export default withTheme(BackLayer);
