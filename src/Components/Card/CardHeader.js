import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';

class CardHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    avatar: PropTypes.node,
    action: PropTypes.node,
    title: PropTypes.string,
    subheader: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    const { avatar, action, title, subheader, style } = this.props;
    return (
      <View style={{ ...styles.container, ...style }}>
        <View style={styles.left}>
          {avatar}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subheader}>{subheader}</Text>
          </View>
        </View>
        <View style={styles.right}>{action}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
  },

  textContainer: {
    marginLeft: 16,
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: 'rgba(0,0,0,.87)',
  },
  subheader: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(0,0,0,.6)',
  },
});

export default withTheme(CardHeader);
