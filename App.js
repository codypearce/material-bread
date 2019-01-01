import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Heading,
  Subtitle,
  BodyText,
  Caption,
  Overline,
  ThemeContext,
  Paper,
  Divider,
} from './src';

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={{}}>
        <View style={styles.container}>
          <Heading type={1}>h1</Heading>
          <Heading type={2}>h2</Heading>
          <Heading type={3}>h3</Heading>
          <Heading type={4}>h4</Heading>
          <Heading type={5}>h5</Heading>
          <Heading type={6}>h6</Heading>
          <Subtitle type={1}>Subtitle One</Subtitle>
          <Subtitle type={2}>Subtitle Two</Subtitle>
          <BodyText type={1}>Body 1</BodyText>
          <BodyText type={2}>Body 2</BodyText>
          <Caption>Caption</Caption>
          <Overline>Overline</Overline>
          <Divider />
          <Paper style={{ padding: 10 }}>
            <Heading type={6}>Paper</Heading>
          </Paper>
          <Paper style={{ padding: 10 }} elevation={8} radius={8}>
            <Heading type={6}>Paper 2</Heading>
          </Paper>
          <Divider />
        </View>
      </ThemeContext.Provider>
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
