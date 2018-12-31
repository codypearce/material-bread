import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeadingOne from './src/Components/Typography/HeadingOne';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeadingOne>Open up App.js to start working on your app!</HeadingOne>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
