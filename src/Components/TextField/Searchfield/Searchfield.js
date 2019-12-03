import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import IconButton from '../../IconButton/IconButton';
import styles from './Searchfield.styles';

class Searchfield extends Component {
  static propTypes = {
    color: PropTypes.string,
    inputRef: PropTypes.func,
    onBlur: PropTypes.func,
    onChangeText: PropTypes.func,
    onCloseIcon: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    value: PropTypes.string,
    searchIconProps: PropTypes.object,
    closeIconProps: PropTypes.object,
    inputProps: PropTypes.object,
  };

  render() {
    const {
      color,
      searchIconProps,
      closeIconProps,
      inputProps,
      inputRef,
      onBlur,
      onChangeText,
      onCloseIcon,
      onFocus,
      placeholder,
      style,
      textStyle,
      value,
    } = this.props;

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: color ? color : 'rgba(255,255,255,.15)' },
          style,
        ]}>
        <IconButton
          name={'search'}
          size={20}
          color={'white'}
          {...searchIconProps}
        />

        <TextInput
          ref={inputRef}
          style={[styles.searchInput, textStyle]}
          placeholder={placeholder ? placeholder : 'Search'}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={'rgba(255,255,255,.57)'}
          onFocus={onFocus}
          onBlur={onBlur}
          {...inputProps}
        />

        <IconButton
          name={'close'}
          size={20}
          style={{ opacity: !value || (value && value.length < 1) ? 0 : 1 }}
          onPress={onCloseIcon}
          color={'white'}
          {...closeIconProps}
        />
      </View>
    );
  }
}

export default withTheme(Searchfield);
