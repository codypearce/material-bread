import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import withTheme from '../Theme/withTheme';
import Paper from './Paper';
import IconButton from './IconButton';
import Fab from './Fab';

class AppbarBottom extends Component {
  static propTypes = {
    color: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.object,

    fab: PropTypes.bool,
    fabPosition: PropTypes.string,
    fabCutout: PropTypes.bool,
    fabStyles: PropTypes.object,
    fabIcon: PropTypes.string,
    onFab: PropTypes.func,

    navigationIcon: PropTypes.node,
    navigationType: PropTypes.string,
    onNavigation: PropTypes.func,

    actionItems: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),

    children: PropTypes.node,
    appbarStyles: PropTypes.object,
  };

  _renderNavigation() {
    const {
      navigationType,
      navigationIcon,
      onNavigation,
      fabPosition,
    } = this.props;

    if (navigationIcon) return navigationIcon;

    if (navigationType) {
      return (
        <IconButton
          name={navigationType || 'menu'}
          size={24}
          color={'white'}
          onPress={onNavigation}
          style={{ marginRight: fabPosition === 'end' ? 24 : 0 }}
        />
      );
    }
    return null;
  }

  _renderFab() {
    const {
      fab,
      fabPosition,
      fabCutout,
      fabStyles,
      onFab,
      fabIcon,
    } = this.props;
    if (!fab) return null;

    const fabRightStyle = {
      right: fabCutout ? 24 : 16,
    };
    const fabCenterStyle = {
      right: 'auto',
    };
    const fabPosStyles = fabPosition === 'end' ? fabRightStyle : fabCenterStyle;

    return (
      <Fab
        elevation={fabCutout ? 8 : 6}
        style={[styles.fabPos, fabPosStyles, fabStyles]}
        onPress={onFab}
        icon={fabIcon}
      />
    );
  }

  _renderCutout() {
    const { fabCutout, fabPosition } = this.props;

    if (!fabCutout) return null;

    const fabRightStyle = {
      right: 16,
    };

    const fabCenterStyle = {
      alignSelf: 'center',
    };

    const cutoutStyles = fabPosition === 'end' ? fabRightStyle : fabCenterStyle;

    return (
      <View style={[styles.centerCut, cutoutStyles]} pointerEvents="none" />
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

  render() {
    const {
      color,
      children,
      style,
      appbarStyles,
      fabPosition,
      theme,
      ...rest
    } = this.props;
    const backgroundColor = color ? color : theme.base.primary;
    return (
      <View style={[styles.contianer, style]}>
        {this._renderCutout()}
        {this._renderFab()}

        <Paper
          style={[
            styles.appbar,
            {
              justifyContent:
                fabPosition === 'end' ? 'flex-start' : 'space-between',
              backgroundColor: backgroundColor,
            },
            appbarStyles,
          ]}
          {...rest}>
          {children ? children : this._renderAppBarContent()}
        </Paper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {},
  appbar: {
    height: 56,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fabPos: {
    position: 'absolute',
    zIndex: 10,
    transform: [{ translateY: -28 }],
    backgroundColor: 'black',
  },
  centerCut: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'white',
    borderBottomRightRadius: 500,
    borderBottomLeftRadius: 500,
    transform: [{ translateY: -1 }],
    width: 56 + 16,
    height: (56 + 16) / 2,
  },
});

export default withTheme(AppbarBottom);
