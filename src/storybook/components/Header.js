import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Heading, Subtitle } from '../..';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };

  render() {
    const { title, subtitle } = this.props;
    return (
      <View style={styles.container}>
        <Heading align="center" type={4}>
          {title}
        </Heading>
        {subtitle ? (
          <Subtitle type={1} style={[styles.subtitle]}>
            {subtitle}
          </Subtitle>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  subtitle: {
    marginTop: 40,
  },
});
