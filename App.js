import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeadingOne from './src/Components/Typography/HeadingOne';
import HeadingTwo from './src/Components/Typography/HeadingTwo';
import HeadingThree from './src/Components/Typography/HeadingThree';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeadingOne>h1</HeadingOne>
        <HeadingTwo>h2</HeadingTwo>
        <HeadingThree>h3</HeadingThree>
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
