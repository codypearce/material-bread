import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import IconButton from '../../IconButton/IconButton';
// import styles from './Searchbar.styles';

class Searchbar extends Component {
  static propTypes = {
    value: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChangeText: PropTypes.func,
    onCloseIcon: PropTypes.func,
    onNavigation: PropTypes.func,
    placeholder: PropTypes.string,
    navigationIcon: PropTypes.string,
    navigationIconComponent: PropTypes.func,
    closeIcon: PropTypes.string,
    closeIconComponent: PropTypes.func,
    theme: PropTypes.object,
  };

  render() {
    const {
      style,
      onChangeText,
      onCloseIcon,
      onNavigation,
      value,
      placeholder,
      navigationIcon,
      navigationIconComponent,
      closeIcon,
      closeIconComponent,
      theme,
    } = this.props;
    return (
      <View style={[theme.searchBar, style]}>
        {navigationIcon ? (
          <IconButton
            name={navigationIcon}
            size={theme.searchBarNavigationIcon.size}
            color={theme.searchBarNavigationIcon.color}
            onPress={onNavigation}
            iconComponent={navigationIconComponent}
          />
        ) : (
          <IconButton
            name="arrow-back"
            size={theme.searchBarNavigationIcon.size}
            color={theme.searchBarNavigationIcon.color}
            onPress={onNavigation}
          />
        )}
        <TextInput
          style={theme.searchInput}
          placeholder={placeholder ? placeholder : 'Search'}
          onChangeText={onChangeText}
          value={value}
        />
        {closeIcon ? (
          <IconButton
            name={closeIcon}
            size={theme.searchBarcloseIcon.size}
            color={theme.searchBarcloseIcon.color}
            onPress={onCloseIcon}
            iconComponent={closeIconComponent}
          />
        ) : (
          <IconButton
            name="close"
            size={theme.searchBarcloseIcon.size}
            color={theme.searchBarcloseIcon.color}
            onPress={onCloseIcon}
          />
        )}
      </View>
    );
  }
}

export default withTheme(Searchbar);
