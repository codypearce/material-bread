import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import withTheme from '../Theme/withTheme';
import Paper from './Paper';
import Icon from './Icon';

class Appbar extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.object,
    title: PropTypes.string,
  };

  render() {
    const { backgroundColor, title, theme, ...rest } = this.props;

    return (
      <Paper
        style={{
          ...styles.appbar,
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
            name="favorite"
            size={24}
            color={'white'}
            style={{ marginRight: 24 }}
          />
          <Icon
            name="search"
            size={24}
            color={'white'}
            style={{ marginRight: 24 }}
          />
          <Icon name="more-vert" size={24} color={'white'} />
        </View>
      </Paper>
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

export default withTheme(Appbar);
