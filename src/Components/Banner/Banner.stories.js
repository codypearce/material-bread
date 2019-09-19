import React from 'react';
import { View, StyleSheet, Platform, Dimensions } from 'react-native';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { Banner, Avatar, Appbar, Heading, BodyText } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';

const pageWidth = Platform.OS == 'web' ? 400 : Dimensions.get('window').width;

/* eslint-disable no-console */
export default storiesOf('Components|Banner', module)
  .addParameters({ jest: ['Banner'] })
  .add('Single line', () => (
    <Container scroll>
      <Header title={'Banner Single Line'} />

      <Banner
        actionItems={[
          { name: 'Sign in', onPress: () => console.log('sign in') },
        ]}
        singleLine
        message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        visible
        style={{ marginBottom: 20 }}
      />
      <Banner
        actionItems={[{ name: 'Continue' }]}
        singleLine
        message={'New Action here'}
        visible
        style={{ marginBottom: 20 }}
      />
      <Banner
        actionItems={[{ name: 'Cancel' }, { name: 'Continue' }]}
        singleLine
        message={'Two Actions here'}
        visible
      />
    </Container>
  ))
  .add('Multi line', () => (
    <Container scroll>
      <Header title={'Banner Multi line'} />
      <Banner
        visible
        actionItems={[{ name: 'Continue' }, { name: 'Sign in' }]}
        message={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        style={{ marginBottom: 40 }}
      />
      <Banner
        visible
        actionItems={[{ name: 'Continue' }, { name: 'Sign in' }]}
        message={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        }
        style={{ marginBottom: 40 }}
      />

      <Banner
        visible
        actionItems={[{ name: 'Continue' }, { name: 'Sign in' }]}
        media={
          <Avatar
            type="icon"
            content="notifications"
            size={40}
            contentColor={'white'}
            color={'#42a5f5'}
          />
        }
        message={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        style={{ marginBottom: 40 }}
      />

      <Banner
        visible
        actionItems={[{ name: 'Continue' }, { name: 'Sign in' }]}
        media={
          <Avatar
            type="icon"
            content="favorite"
            size={40}
            contentColor={'white'}
            color={'#E91E63'}
          />
        }
        message={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        }
        style={{ marginBottom: 40 }}
      />
    </Container>
  ))
  .add('With Appbar', () => (
    <Container scroll style={{ padding: 0 }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Appbar
            barType={'normal'}
            title={'Trivia App'}
            navigation={'menu'}
            actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
          />
          <Banner
            visible
            mobileLayout
            actionItems={[{ name: 'Fix it' }, { name: 'Learn more' }]}
            message={
              'There was a problem processsing a transaction on your card. '
            }
          />
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              paddingLeft: 24,
              paddingRight: 24,
            }}>
            <Heading type={4} style={{ marginBottom: 20 }}>
              Trivia Page Content
            </Heading>
            <BodyText text="Cassowaries cannot fly due to lack of chest bone that supports muscles used for flying." />
          </View>
        </View>
      </View>
    </Container>
  ));

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'relative',
  },
  body: {
    width: pageWidth,
    height: 500,
  },
});
