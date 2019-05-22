import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform, Dimensions, Animated } from 'react-native';
import withTheme from '../../Theme/withTheme';
import shadow from '../../Utils/Shadow/shadow';
import Button from '../Button/Button';
import { BodyText } from '../../';
import styles from './Banner.styles';

class Banner extends Component {
  static propTypes = {
    mobileLayout: PropTypes.bool,
    style: PropTypes.object,
    actionItems: PropTypes.array,
    singleLine: PropTypes.bool,
    media: PropTypes.node,
    visible: PropTypes.bool,
    message: PropTypes.string,
    position: PropTypes.string,
  };

  state = {
    isWideScreen: false,
    width: 0,
    maxHeight: 0,
    height: new Animated.Value(10),
    shouldHide: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { visible } = this.props;
    const { shouldHide } = this.state;

    if (!prevProps.visible && visible) {
      this.setState({ shouldHide: false });
      this.animateBanner(true);
    } else if (
      (prevProps.visible && !visible) ||
      (!prevState.shouldHide && shouldHide)
    ) {
      this.animateBanner(false);
    }
  }

  componentDidMount() {
    if (this.props.visible) {
      this.animateBanner(true);
    }
    this._handleLayout();
    Dimensions.addEventListener('change', this._handleLayout);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this._handleLayout);
  }

  _handleLayout = () => {
    const width = Dimensions.get('window').width;

    if (width == this.state.width) return;

    this.setState({
      isWideScreen: width > 1024,
      width,
    });
  };

  animateBanner(show) {
    const { maxHeight } = this.state;
    const newHeight = show ? maxHeight : 0;

    Animated.parallel([
      Animated.spring(this.state.height, {
        toValue: newHeight,
      }),
    ]).start();
  }

  _renderActionItems() {
    const { actionItems } = this.props;

    if (!actionItems) return null;
    const platformStyles = this.getPlatformStyles();

    return (
      <View style={[styles.buttons, platformStyles.actions]}>
        {actionItems.map(item => {
          if (item.name && item.name.length > 0) {
            return (
              <Button
                key={item.name}
                text={item.name}
                compact={true}
                type="text"
                onPress={() => {
                  item.onPress && item.onPress();
                  this.setState({ shouldHide: true });
                }}
                style={[styles.button]}
              />
            );
          } else {
            return null;
          }
        })}
      </View>
    );
  }

  _renderContent() {
    const { media, message } = this.props;
    const platformStyles = this.getPlatformStyles();

    return (
      <View style={[styles.content, platformStyles.content]}>
        {media ? <View style={platformStyles.image}>{media}</View> : null}
        <BodyText
          type={2}
          style={{
            lineHeight: 20,
            maxWidth: 460,
            flexShrink: 1,
          }}>
          {message}
        </BodyText>
      </View>
    );
  }

  _renderBody() {
    const getPlatformStyles = this.getPlatformStyles();
    return (
      <View style={[styles.body, getPlatformStyles.body]}>
        {this._renderContent()}

        {this._renderActionItems()}
      </View>
    );
  }

  getPlatformStyles() {
    const { mobileLayout, media, singleLine } = this.props;
    const { isWideScreen, width } = this.state;
    const isWeb = Platform.OS == 'web';
    let styles = {
      body: {
        alignItems: singleLine ? 'center' : 'flex-start',
        justifyContent: singleLine ? 'space-between' : 'space-between',
        marginTop: singleLine ? 8 : 24,
        marginLeft: 16,
        flexDirection: singleLine ? 'row' : 'column',
      },
      content: {
        marginBottom: 8,
        marginRight: width < 400 ? 8 : 0,
      },
      actions: {
        justifyContent: singleLine ? 'center' : 'flex-end',
        alignItems: singleLine ? 'center' : 'flex-end',
        alignSelf: singleLine ? 'center' : 'flex-end',
        marginRight: 8,
      },
      image: {
        marginRight: 16,
      },
    };
    if (isWeb && isWideScreen && !mobileLayout) {
      styles = {
        body: {
          alignItems: singleLine ? 'center' : 'flex-start',
          justifyContent: singleLine ? 'space-between' : 'space-between',
          marginTop: singleLine ? 8 : 16,
          marginLeft: media ? 16 : 24,
          flexDirection: 'row',
        },
        content: {
          marginBottom: singleLine ? 8 : 16,
        },
        actions: {
          justifyContent: singleLine ? 'center' : 'flex-end',
          alignItems: singleLine ? 'center' : 'flex-end',
          alignSelf: singleLine ? 'center' : 'flex-end',
        },
        image: {
          marginRight: 24,
        },
      };
    }

    return styles;
  }

  _onLayout = event => {
    this.setState(
      {
        maxHeight: event.nativeEvent.layout.height,
      },
      () => {
        if (this.props.visible) this.animateBanner(true);
      },
    );
  };

  render() {
    const { style, position, visible } = this.props;
    const { shouldHide } = this.state;
    const appliedShadow = visible && !shouldHide ? 1 : 0;

    return (
      <Animated.View
        style={[
          styles.container,
          {
            position: position ? position : 'relative',
            height: this.state.height,
            ...shadow(appliedShadow),
          },
          style,
        ]}>
        <View onLayout={this._onLayout}>{this._renderBody()}</View>
      </Animated.View>
    );
  }
}

export default withTheme(Banner);
