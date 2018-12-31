import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeadingOne from './src/Components/Typography/HeadingOne';
import HeadingTwo from './src/Components/Typography/HeadingTwo';
import HeadingThree from './src/Components/Typography/HeadingThree';
import HeadingFour from './src/Components/Typography/HeadingFour';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeadingOne>h1</HeadingOne>
        <HeadingTwo>h2</HeadingTwo>
        <HeadingThree>h3</HeadingThree>
        <HeadingFour>h4</HeadingFour>
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
