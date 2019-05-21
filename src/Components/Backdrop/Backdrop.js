import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Animated, Easing, SafeAreaView } from 'react-native';
import withTheme from '../../Theme/withTheme';
import styles from './Backdrop.styles';
import HeaderButton from './HeaderButton/HeaderButton';
import FrontLayer from './FrontLayer/FrontLayer';
import BackLayer from './BackLayer/BackLayer';

class Backdrop extends PureComponent {
  static propTypes = {
    backLayerStyle: PropTypes.object,
    frontLayerStyle: PropTypes.object,
    headerButtonStyle: PropTypes.object,
    style: PropTypes.object,
    backLayerConcealed: PropTypes.node,
    offset: PropTypes.number,
    initialOffset: PropTypes.number,
    children: PropTypes.node,
    backLayerRevealed: PropTypes.node,
    theme: PropTypes.object,
    subheader: PropTypes.string,
  };

  static defaultProps = {
    initialOffset: 56,
    buttonRippleColor: 'rgba(255,255,255,0.3)',
  };

  constructor(props) {
    super(props);
    const window = Dimensions.get('window');
    this.state = {
      window,
      backConcealed: true,
      backRevealed: false,
      iconName: 'menu',
    };
  }

  animate = new Animated.Value(0);
  internalAnimate = new Animated.Value(0);
  internalOffsetAnimate = new Animated.Value(0);
  isInternalAnimate = false;

  toggleLayout() {
    const { backConcealed } = this.state;

    if (backConcealed) {
      this.setState({ backRevealed: true, iconName: 'close' });
    } else {
      this.setState({ backConcealed: true, iconName: 'menu' });
    }

    this.isInternalAnimate = false;

    Animated.timing(this.animate, {
      toValue: backConcealed ? 1 : 0,
      duration: 196,
      easing: Easing.ease,
    }).start(() => {
      if (backConcealed) {
        this.setState({ backConcealed: false });
      } else {
        this.setState({
          backRevealed: false,
        });
      }
    });
  }

  render() {
    const {
      backLayerStyle,
      headerButtonStyle,
      frontLayerStyle,
      children,
      initialOffset,
      offset,
      backLayerRevealed,
      backLayerConcealed,
      theme,
      subheader,
    } = this.props;
    const { backConcealed, backRevealed, window, iconName } = this.state;

    return (
      <SafeAreaView
        style={[
          styles.backLayerContainer,
          { backgroundColor: theme.primary.main },
          backLayerStyle,
        ]}>
        <BackLayer
          backLayerConcealed={backLayerConcealed}
          animate={this.animate}
          internalAnimate={this.internalAnimate}
          backConcealed={backConcealed}
          backLayerRevealed={backLayerRevealed}
          backRevealed={backRevealed}
        />
        <FrontLayer
          toggleLayout={() => this.toggleLayout()}
          animate={this.animate}
          frontLayerStyle={frontLayerStyle}
          initialOffset={initialOffset}
          window={window}
          offset={offset}
          backRevealed={backRevealed}
          backLayerRevealed={backLayerRevealed}
          internalOffsetAnimate={this.internalOffsetAnimate}
          isInternalAnimate={this.isInternalAnimate}
          subheader={subheader}>
          {children}
        </FrontLayer>
        <HeaderButton
          backConcealed={backConcealed}
          headerButtonStyle={headerButtonStyle}
          toggleLayout={() => this.toggleLayout()}
          iconName={iconName}
        />
      </SafeAreaView>
    );
  }
}

export default withTheme(Backdrop);
