import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import shadow from '../../Abstract/shadow';

export const BottomNavContext = React.createContext();

class BottomNavigation extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  state = {
    backgroundColor: '#2196f3',
  };

  render() {
    const { children, backgroundColor, style } = this.props;

    const backgroundColorActual = backgroundColor ? backgroundColor : '#2196f3';

    return (
      <View
        style={{
          ...styles.bottomNavigation,
          ...shadow(8),
          backgroundColor: backgroundColorActual,
          ...style,
        }}>
        <BottomNavContext.Provider
          value={{ backgroundColor: backgroundColorActual }}>
          {children}
        </BottomNavContext.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavigation: {
    height: 56,
    flexDirection: 'row',
  },
});

export default withTheme(BottomNavigation);
