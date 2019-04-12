import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { storiesOf } from '../helpers/storiesOf';

import Container from '../components/Container';
import { Heading, BodyText, Button } from '../../src';

const styles = StyleSheet.create({
  top: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: 48,
    textAlign: 'center',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(10, 10, 10, 0.67)',
    fontWeight: '400',
    marginTop: 6,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 22,
    flexWrap: 'wrap',
  },
  initialText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    marginHorizontal: 'auto',
    maxWidth: 780,
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: 'row',
  },
  secondButton: { marginLeft: 20 },
  logo: {
    width: 300.502,
    height: 250.398,
    resizeMode: 'cover',
  },
});

storiesOf('Docs|Start Here', module).add('Home', () => (
  <Container>
    <View style={styles.top}>
      <Image
        source={{ uri: '../assets/logo-shadow.svg' }}
        style={styles.logo}
      />
      <Heading style={styles.header}>Material Bread</Heading>
      <BodyText style={styles.subtitle}>
        One Component Library, Six Platforms
      </BodyText>
    </View>

    <View style={styles.initialText}>
      <BodyText style={styles.bodyText}>
        This is the Storybook environment for Material Bread which is a highly
        customizable cross-platform React Native Material Library. Each
        component storybook story contains many demos, visit the docs to see the
        full component API.
      </BodyText>
      <View style={styles.buttonRow}>
        <Button text={'Docs'} type={'outlined'} textColor={'#dac589'} />
        <Button
          text={'Github'}
          type={'outlined'}
          textColor={'#666'}
          style={styles.secondButton}
        />
      </View>
    </View>
  </Container>
));
