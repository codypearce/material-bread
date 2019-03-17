import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';
import withTheme from '../Theme/withTheme';
import IconButton from './IconButton';
import { shadow } from '..';

class Searchfield extends Component {
  static propTypes = {
    value: PropTypes.string,
    style: PropTypes.object,
    onChangeText: PropTypes.func,
    onCloseIcon: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    color: PropTypes.string,
  };

  render() {
    const {
      style,
      onChangeText,
      onCloseIcon,
      value,
      onFocus,
      onBlur,
      color,
    } = this.props;

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: color ? color : 'rgba(255,255,255,.15)' },
          style,
        ]}>
        <IconButton name={'search'} size={20} color={'white'} />

        <TextInput
          style={styles.searchInput}
          placeholder={'Search'}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={'rgba(255,255,255,.57)'}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <IconButton
          name={'close'}
          size={20}
          style={{ opacity: !value || value.length < 1 ? 0 : 1 }}
          onPress={onCloseIcon}
          color={'white'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 8,

    height: 40,
  },
  searchInput: {
    fontSize: 16,
    height: 40,
    marginLeft: 8,
    flex: 1,
    color: 'white',
    outline: 'none',
    ...shadow(0),
  },
});

export default withTheme(Searchfield);
