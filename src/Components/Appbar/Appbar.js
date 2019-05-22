import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import withTheme from '../../Theme/withTheme';
import Paper from '../Paper/Paper';
import IconButton from '../IconButton/IconButton';
import styles from './Appbar.styles';
import { shadow } from '../../';

class Appbar extends Component {
  static propTypes = {
    color: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.object,
    barType: PropTypes.string,
    backgroundImage: PropTypes.node,
    position: PropTypes.string,
    elevation: PropTypes.number,

    navigation: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    onNavigation: PropTypes.func,

    title: PropTypes.string,
    titleStyles: PropTypes.object,
    onTitle: PropTypes.func,
    subtitle: PropTypes.string,
    subtitleStyles: PropTypes.object,

    actionItems: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),

    children: PropTypes.node,
  };

  _renderAppbarContent() {
    const { barType } = this.props;

    return (
      <Fragment>
        <View
          style={[
            styles.left,
            {
              height:
                barType === 'prominent' || barType === 'prominent dense'
                  ? '100%'
                  : 'auto',
            },
          ]}>
          {this._renderNavigation()}
          {this._renderTitle()}
        </View>
        <View style={styles.right}>{this._renderActionItems()}</View>
      </Fragment>
    );
  }

  _renderNavigation() {
    const { navigation, onNavigation, barType } = this.props;

    if (typeof navigation === 'string' || navigation instanceof String) {
      return (
        <IconButton
          name={navigation || 'menu'}
          size={24}
          color={'white'}
          onPress={onNavigation}
          style={{
            alignSelf:
              barType === 'prominent' || barType === 'prominent dense'
                ? 'flex-start'
                : 'center',
          }}
        />
      );
    } else {
      return navigation;
    }
  }

  _renderTitle() {
    const { onTitle } = this.props;
    if (onTitle) {
      return (
        <TouchableWithoutFeedback onPress={onTitle}>
          {this._renderTitleInner()}
        </TouchableWithoutFeedback>
      );
    } else {
      return this._renderTitleInner();
    }
  }

  _renderTitleInner() {
    const {
      barType,
      title,
      navigation,
      titleStyles,
      subtitle,
      subtitleStyles,
    } = this.props;

    return (
      <View
        style={[
          {
            marginLeft: navigation ? 32 : 0,
            marginBottom: barType === 'prominent' ? 12 : 0,
            alignSelf:
              barType === 'prominent' || barType === 'prominent dense'
                ? 'flex-end'
                : 'center',
            zIndex: 100,
          },
        ]}>
        <Text
          numberOfLines={
            barType === 'prominent' || barType === 'prominent dense' ? 3 : 1
          }
          style={[styles.pageTitle, titleStyles]}>
          {title}
        </Text>
        {subtitle && barType !== 'dense' ? (
          <Text
            style={[
              { fontSize: 14 },
              { color: 'rgba(255,255,255,.87)' },
              subtitleStyles,
            ]}>
            {subtitle}
          </Text>
        ) : null}
      </View>
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

  appbarHeight() {
    const { barType } = this.props;
    let height = 56;
    if (barType === 'prominent') {
      height = 128;
    } else if (barType === 'dense') {
      height = 48;
    } else if (barType == 'prominent dense') {
      height = 96;
    }
    return height;
  }

  render() {
    const {
      barType,
      color,
      backgroundImage,
      theme,
      style,
      children,
      position,
      elevation,
      ...rest
    } = this.props;

    let backgroundColor = color ? color : theme.primary.main;
    const implementedShadow = elevation ? shadow(shadow) : shadow(6);

    return (
      <Paper
        style={[
          styles.appbar,

          {
            width: '100%',
            backgroundColor: backgroundColor,
            height: this.appbarHeight(),
            padding: barType == 'dense' ? 12 : 16,
            position: position || 'relative',
            alignItems:
              barType == 'prominent' || barType === 'prominent dense'
                ? 'flex-start'
                : 'center',
            ...implementedShadow,
          },

          style,
        ]}
        {...rest}>
        {backgroundImage &&
          React.cloneElement(backgroundImage, {
            style: [
              // For some reason importing styles here means they  don't get applied
              {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              },
            ],
          })}
        {children ? children : this._renderAppbarContent()}
      </Paper>
    );
  }
}

export default withTheme(Appbar);
