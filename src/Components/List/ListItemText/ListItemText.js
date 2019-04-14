import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class ListItemText extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    primary: PropTypes.string,
    secondary: PropTypes.string,
  };
  render() {
    const { primary, secondary } = this.props;
    return (
      <View>
        <Text style={styles.primary}>{primary}</Text>
        {secondary ? <Text style={styles.secondary}>{secondary}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  primary: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
  },
  secondary: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 14,
  },
});

export default withTheme(ListItemText);
