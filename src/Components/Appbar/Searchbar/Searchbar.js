import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import IconButton from '../../IconButton/IconButton';
import styles from './Searchbar.styles';

class Searchbar extends Component {
  static propTypes = {
    value: PropTypes.string,
    style: PropTypes.object,
    onChangeText: PropTypes.func,
    onCloseIcon: PropTypes.func,
    onNavigation: PropTypes.func,
    placeholder: PropTypes.string,
  };

  render() {
    const {
      style,
      onChangeText,
      onCloseIcon,
      onNavigation,
      value,
      placeholder,
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
          placeholder={placeholder ? placeholder : 'Search'}
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

export default withTheme(Searchbar);
