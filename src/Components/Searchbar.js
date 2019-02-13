import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';
import withTheme from '../Theme/withTheme';
import IconButton from './IconButton';
import Paper from './Paper';
import { shadow } from '..';

class Searchbar extends Component {
  static propTypes = {
    value: PropTypes.string,
    style: PropTypes.object,
    onChangeText: PropTypes.func,
    onCloseIcon: PropTypes.func,
  };

  render() {
    const { style, onChangeText, onCloseIcon, value } = this.props;
    return (
      <Paper
        style={{
          ...styles.container,
          ...style,
        }}>
        <IconButton name={'search'} size={20} />

        <TextInput
          style={{ ...styles.searchInput }}
          placeholder={'Search'}
          value={value}
          onChangeText={onChangeText}
        />

        <IconButton
          name={'close'}
          size={20}
          style={{ opacity: value.length < 1 ? 0 : 1 }}
          onPress={onCloseIcon}
        />
      </Paper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 8,

    ...shadow(4),
  },
  searchInput: {
    fontSize: 16,
    height: 40,
    marginLeft: 8,
    flex: 1,
  },
});

export default withTheme(Searchbar);
