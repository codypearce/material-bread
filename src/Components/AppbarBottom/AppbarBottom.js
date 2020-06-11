import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import withTheme from '../../Theme/withTheme';
import { IconButton } from '../../';
import styles from './AppbarBottom.styles';
import AppbarBottomSVG from './AppbarBottom.svg.js';

class AppbarBottom extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    color: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,

    fab: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    fabPosition: PropTypes.string,
    fabCutout: PropTypes.bool,

    navigation: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    onNavigation: PropTypes.func,

    actionItems: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),

    children: PropTypes.node,
    appbarStyles: PropTypes.object,
  };

  state = {
    appbarWidth: 0,
    appbarHeight: 0,
  };

  _renderNavigation() {
    const { navigation, onNavigation, fabPosition } = this.props;

    if (typeof navigation === 'string' || navigation instanceof String) {
      return (
        <IconButton
          name={navigation || 'menu'}
          size={24}
          color={'white'}
          onPress={onNavigation}
          style={{ marginRight: fabPosition === 'end' ? 24 : 0 }}
        />
      );
    } else {
      return navigation;
    }
  }

  _renderFab() {
    const { fab, fabPosition, fabCutout } = this.props;
    if (!fab) return null;

    const isEnd = fabPosition === 'end';
    const cutOutPadding = fabCutout ? 18 : 16;

    const fabRightStyle = {
      right: cutOutPadding,
    };
    const fabCenterStyle = {
      right: 'auto',
    };
    const fabPosStyles = isEnd ? fabRightStyle : fabCenterStyle;

    const isFabSpeedial = fab && fab.props && fab.props.actions;

    return React.cloneElement(fab, {
      shadow: 12,
      style: [styles.fabPos, fabPosStyles],
      containerStyle: {
        position: 'absolute',
        width: '100%',
        paddingRight: isFabSpeedial && isEnd ? cutOutPadding : 0,
        transform: [{ translateY: -28 }],
      },
    });
  }

  _renderCutout() {
    const { fabCutout, fabPosition, color, theme } = this.props;
    const backgroundColor = color ? color : theme.primary.main;
    if (!fabCutout) return null;

    return (
      <AppbarBottomSVG
        fabPosition={fabPosition}
        paddingHorizontal={32}
        backgroundColor={backgroundColor}
        width={this.state.appbarWidth}
      />
    );
  }

  _renderActionItems() {
    const { actionItems } = this.props;
    if (!actionItems) return null;
    return (
      <Fragment>
        {actionItems.map((item, index) => {
          if (item.name) {
            return (
              <IconButton
                key={item.name}
                name={item.name}
                size={24}
                color={'white'}
                style={{
                  marginRight: index + 1 === actionItems.length ? 0 : 16,
                }}
                onPress={item.onPress}
              />
            );
          } else {
            return item;
          }
        })}
      </Fragment>
    );
  }

  _renderAppBarContent() {
    return (
      <Fragment>
        {this._renderNavigation()}

        <View style={styles.right}>{this._renderActionItems()}</View>
      </Fragment>
    );
  }

  measureAppbar = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({
      appbarWidth: width,
      appbarHeight: height,
    });
  };

  render() {
    const {
      color,
      children,
      style,
      appbarStyles,
      fabPosition,
      theme,
      fabCutout,
      ...rest
    } = this.props;
    const { appbarWidth } = this.state;
    const backgroundColor = color ? color : theme.primary.main;

    return (
      <View style={style}>
        <View
          style={[styles.contianer, { opacity: appbarWidth == 0 ? 0 : 1 }]}
          onLayout={this.measureAppbar}>
          {this._renderCutout()}
          <View
            style={[
              styles.appbar,
              {
                justifyContent:
                  fabPosition === 'end' ? 'flex-start' : 'space-between',
                backgroundColor: !fabCutout ? backgroundColor : 'transparent',
              },
              appbarStyles,
            ]}
            {...rest}>
            {children ? children : this._renderAppBarContent()}
          </View>
        </View>
        {this._renderFab()}
      </View>
    );
  }
}

export default withTheme(AppbarBottom);
