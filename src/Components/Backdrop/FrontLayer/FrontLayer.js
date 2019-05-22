import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Platform, Animated } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import styles from './FrontLayer.styles';
import FrontLayerScrim from '../FrontLayerScrim/FrontLayerScrim';
import { Subtitle } from '../../..';

const IOS = Platform.OS === 'ios';

class FrontLayer extends PureComponent {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    offset: PropTypes.number,
    initialOffset: PropTypes.number,
    children: PropTypes.node,
    backLayerRevealed: PropTypes.object,
    frontLayerStyle: PropTypes.object,
    theme: PropTypes.object,
    toggleLayout: PropTypes.func,
    animate: PropTypes.object,
    backRevealed: PropTypes.bool,
    isInternalAnimate: PropTypes.bool,
    internalOffsetAnimate: PropTypes.object,
    window: PropTypes.object,
    subheader: PropTypes.string,
  };

  getFrontLayerTranslateY = () => {
    const { animate, initialOffset } = this.props;

    const offset = this.getOffset();
    return animate.interpolate({
      inputRange: [0, 1],
      outputRange: [initialOffset, offset],
    });
  };

  getOffset = (ignoreElement = false) => {
    const { backLayerRevealed, offset, window } = this.props;

    if (!ignoreElement && backLayerRevealed && offset) {
      return offset;
    }

    if (offset) return offset;

    const y = this.getY();

    return window.height - y;
  };

  getY = () => {
    const { initialOffset } = this.props;
    const y = IOS ? 20 : 24;
    return y + initialOffset;
  };

  render() {
    const {
      children,
      toggleLayout,
      animate,
      frontLayerStyle,
      backRevealed,
      subheader,
    } = this.props;

    const translateY = this.getFrontLayerTranslateY();

    return (
      <Animated.View
        style={[
          styles.frontLayerContainer,
          frontLayerStyle,
          { transform: [{ translateY }] },
        ]}>
        <Subtitle text={subheader} style={styles.subheader} />
        {children}
        <FrontLayerScrim
          toggleLayout={() => toggleLayout()}
          animate={animate}
          backRevealed={backRevealed}
        />
      </Animated.View>
    );
  }
}

export default withTheme(FrontLayer);
