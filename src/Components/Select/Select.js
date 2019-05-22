import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, FlatList, Platform } from 'react-native';

import { Menu, MenuItem, Icon, TextField } from '../../..';

import withTheme from '../../Theme/withTheme';
import styles from './Select.styles';

class Select extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    buttonStyle: PropTypes.object,
    label: PropTypes.string,
    selectedItem: PropTypes.node,
    menuItems: PropTypes.array,
    visible: PropTypes.bool,
    textFieldProps: PropTypes.object,
    menuProps: PropTypes.object,
    type: PropTypes.string,
    onBackdropPress: PropTypes.func,
    theme: PropTypes.object,
  };

  state = {
    visible: false,
  };

  onSelect = item => {
    this.props.onSelect(item);
    this.hideMenu();
  };

  showMenu() {
    this.setState({
      visible: true,
    });
  }

  hideMenu() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const {
      buttonStyle,
      label,
      selectedItem,
      menuItems,
      textFieldProps,
      menuProps,
      type,
      theme,
    } = this.props;

    const { visible } = this.state;

    let iconColor = visible ? theme.primary.main : '#757575';
    if (textFieldProps && textFieldProps.error) iconColor = theme.error.main;

    const platformStyles =
      Platform.OS == 'web'
        ? {
            cursor: 'pointer',
          }
        : {};

    return (
      <Menu
        style={[styles.menu, { flex: 1 }]}
        sameWidth
        visible={visible}
        modalMenuStyle={{
          marginTop: textFieldProps && textFieldProps.dense ? 60 : 71,
          width: '100%',
          marginLeft: Platform.OS !== 'web' ? 6 : 0,
        }}
        onBackdropPress={() => this.hideMenu()}
        button={
          <TouchableHighlight
            onPress={() => this.showMenu()}
            style={[styles.button, buttonStyle]}
            underlayColor={'transparent'}>
            <View style={styles.innerView}>
              <TextField
                type={type ? type : 'flat'}
                label={label}
                value={selectedItem}
                focused={visible}
                editable={false}
                style={[
                  styles.textfield,
                  platformStyles,
                  textFieldProps && textFieldProps.style,
                ]}
                trailingIcon={
                  <Icon
                    name="arrow-drop-down"
                    size={24}
                    color={iconColor}
                    style={styles.icon}
                  />
                }
                {...textFieldProps}
              />
            </View>
          </TouchableHighlight>
        }
        {...menuProps}>
        <FlatList
          data={menuItems}
          style={{ flex: 1 }}
          renderItem={({ item }) => {
            return (
              <MenuItem
                key={item.id}
                text={item.name}
                onPress={() => this.onSelect(item)}
                style={{ flex: 1 }}
              />
            );
          }}
        />
      </Menu>
    );
  }
}

export default withTheme(Select);
