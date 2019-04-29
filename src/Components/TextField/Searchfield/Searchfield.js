import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import IconButton from '../../IconButton/IconButton';
import styles from './Searchfield.styles';

class Searchfield extends Component {
  static propTypes = {
    value: PropTypes.string,
    style: PropTypes.object,
    onChangeText: PropTypes.func,
    onCloseIcon: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    color: PropTypes.string,
    placeholder: PropTypes.string,
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
      placeholder,
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
          placeholder={placeholder ? placeholder : 'Search'}
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

export default withTheme(Searchfield);
