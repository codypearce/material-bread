import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import withTheme from '../../Theme/withTheme';
import { IconButton, Paper } from '../../';
import styles from './AppbarBottom.styles';

class AppbarBottom extends Component {
  static propTypes = {
    color: PropTypes.string,
    style: PropTypes.object,
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

    const fabRightStyle = {
      right: fabCutout ? 24 : 16,
    };
    const fabCenterStyle = {
      right: 'auto',
    };
    const fabPosStyles = fabPosition === 'end' ? fabRightStyle : fabCenterStyle;

    return React.cloneElement(fab, {
      shadow: fabCutout ? 8 : 6,
      style: [styles.fabPos, fabPosStyles],
    });
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
    const backgroundColor = color ? color : theme.primary.main;
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

export default withTheme(AppbarBottom);
