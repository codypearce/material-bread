import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { storiesOf } from '../helpers/storiesOf';

import Container from '../components/Container';
import { Heading, BodyText, Button, Anchor } from '../..';
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
  },
  initialText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    marginHorizontal: 'auto',
    maxWidth: 780,
  },
  textRow: {
    marginTop: 20,
    flexWrap: 'wrap',
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

export default storiesOf('Docs|Start Here', module).add('Home', () => (
  <Container>
    <View style={styles.top}>
      <Image
        source={{ uri: 'http://material-bread.org/logo-shadow.svg' }}
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
        customizable cross-platform React Native Material Library. Visit the
        docs to see the full component API.
      </BodyText>
      <View style={styles.buttonRow}>
        <Anchor url={'http://material-bread.org/'} target={'_parent'}>
          <Button
            text={'Documentation'}
            type={'outlined'}
            textColor={'rgb(233, 30, 99)'}
          />
        </Anchor>

        <Anchor
          url={'https://github.com/codypearce/material-bread'}
          target={'_parent'}>
          <Button
            text={'Github'}
            type={'outlined'}
            textColor={'#666'}
            style={styles.secondButton}
          />
        </Anchor>
      </View>
    </View>
  </Container>
));
