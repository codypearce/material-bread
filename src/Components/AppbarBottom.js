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
      <View style={{ ...style }}>
        {centerCut ? (
          <View
            style={{
              position: 'absolute',
              zIndex: 10,
              backgroundColor: 'white',
              borderBottomRightRadius: 100,
              borderBottomLeftRadius: 100,
              width: 56 * 1.25,
              height: 28 * 1.25,
              alignSelf: 'center',
              transform: [{ translateY: 0 }],
            }}
          />
        ) : null}

        <Fab
          backgroundColor={'black'}
          elevation={6}
          style={{
            position: 'absolute',
            zIndex: 10,
            transform: [{ translateY: -28 }],
          }}
        />

        <Paper
          style={{
            ...styles.appbar,
            position: 'relative',
            backgroundColor: backgroundColor
              ? backgroundColor
              : theme.base.primary,
          }}
          {...rest}>
          <View style={{ ...styles.left }}>
            <Icon name="menu" size={24} color={'white'} />
            <Text style={styles.pageTitle}>{title}</Text>
          </View>

          <View style={{ ...styles.right }}>
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
});

export default withTheme(AppbarBottom);
