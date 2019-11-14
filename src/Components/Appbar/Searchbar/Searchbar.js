import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import IconButton from '../../IconButton/IconButton';

class Searchbar extends Component {
  static propTypes = {
    value: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChangeText: PropTypes.func,
    onCloseIcon: PropTypes.func,
    onNavigation: PropTypes.func,
    placeholder: PropTypes.string,
    navigationIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    navigationIconComponent: PropTypes.func,
    closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    closeIconComponent: PropTypes.func,
    theme: PropTypes.object,
  };

  _renderNavigation() {
    const {
      navigationIcon = '',
      onNavigation,
      navigationIconComponent,
      theme,
    } = this.props;

    if (
      typeof navigationIcon === 'string' ||
      navigationIcon instanceof String
    ) {
      return (
        <IconButton
          name={navigationIcon || 'arrow-back'}
          size={theme.searchBarNavigationIcon.size}
          color={theme.searchBarNavigationIcon.color}
          onPress={onNavigation}
          iconComponent={navigationIconComponent}
        />
      );
    } else {
      return navigationIcon;
    }
  }

  _renderClose() {
    const { closeIcon, onCloseIcon, closeIconComponent, theme } = this.props;
    // To hide close icon send closeIcon={false}
    if (typeof closeIcon === 'string' || closeIcon instanceof String) {
      return (
        <IconButton
          name={closeIcon || 'close'}
          size={theme.searchBarcloseIcon.size}
          color={theme.searchBarcloseIcon.color}
          onPress={onCloseIcon}
          iconComponent={closeIconComponent}
        />
      );
    } else if (closeIcon) {
      return closeIcon;
    }
  }

  render() {
    const { style, onChangeText, value, placeholder, theme } = this.props;
    return (
      <View style={[theme.searchBar, style]}>
        {this._renderNavigation()}
        <TextInput
          style={theme.searchInput}
          placeholder={placeholder ? placeholder : 'Search'}
          onChangeText={onChangeText}
          value={value}
        />
        {this._renderClose()}
      </View>
    );
  }
}

export default withTheme(Searchbar);
