import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import withTheme from '../Theme/withTheme';
import Paper from './Paper';
import Icon from './Icon';
import Fab from './Fab';

class AppbarBottom extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.object,
    title: PropTypes.string,
    centerCut: PropTypes.bool,
  };

  render() {
    const {
      backgroundColor,
      title,
      theme,
      style,
      centerCut,
      ...rest
    } = this.props;

    return (
      <View style={style}>
        {centerCut ? (
          <View
            style={[styles.centerCut, { width: 56 * 1.25, height: 56 * 1.25 }]}
            pointerEvents="none"
          />
        ) : null}

        <Fab backgroundColor={'black'} elevation={6} style={styles.fabPos} />

        <Paper
          style={[
            styles.appbar,
            {
              backgroundColor: backgroundColor
                ? backgroundColor
                : theme.base.primary,
            },
          ]}
          {...rest}>
          <View style={styles.left}>
            <Icon name="menu" size={24} color={'white'} />
            <Text style={styles.pageTitle}>{title}</Text>
          </View>

          <View style={styles.right}>
            <Icon
              name="search"
              size={24}
              color={'white'}
              style={{ marginRight: 24 }}
            />
            <Icon name="more-vert" size={24} color={'white'} />
          </View>
        </Paper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    height: 56,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  pageTitle: {
    fontSize: 18,
    color: 'white',
    marginLeft: 32,
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
  },
  centerCut: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'white',
    borderBottomRightRadius: 500,
    borderBottomLeftRadius: 500,
    alignSelf: 'center',
    transform: [{ translateY: -28 * 1.25 }],
  },
});

export default withTheme(AppbarBottom);
