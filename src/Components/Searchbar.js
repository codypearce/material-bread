import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';
import withTheme from '../Theme/withTheme';
import IconButton from './IconButton';
import { shadow } from '..';

class Searchbar extends Component {
  static propTypes = {
    value: PropTypes.string,
    style: PropTypes.object,
    onChangeText: PropTypes.func,
    onCloseIcon: PropTypes.func,
    onNavigation: PropTypes.func,
  };

  render() {
    const {
      style,
      onChangeText,
      onCloseIcon,
      onNavigation,
      value,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <IconButton
          name="arrow-back"
          size={24}
          color={'black'}
          onPress={onNavigation}
        />
        <TextInput
          style={styles.searchInput}
          placeholder={'Search'}
          onChangeText={onChangeText}
          value={value}
        />
        <IconButton
          name="close"
          size={24}
          color={'black'}
          onPress={onCloseIcon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    height: 56,
    paddingHorizontal: 16,
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
    marginLeft: 8,
    height: 30,
    outline: 'none',
    ...shadow(0),
  },
});

export default withTheme(Searchbar);
