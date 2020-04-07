import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  View,
  FlatList,
  Platform,
  Dimensions,
} from 'react-native';

import Menu from '../Menu/Menu.js';
import MenuItem from '../Menu/MenuItem/MenuItem.js';
import Icon from '../Icon/Icon.js';
import TextField from '../TextField/TextField.js';

import withTheme from '../../Theme/withTheme';
import styles from './Select.styles';

const { height } = Dimensions.get('window');

class Select extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    label: PropTypes.string,
    selectedItem: PropTypes.node,
    menuItems: PropTypes.array,
    visible: PropTypes.bool,
    textFieldProps: PropTypes.object,
    menuProps: PropTypes.object,
    type: PropTypes.string,
    onBackdropPress: PropTypes.func,
    theme: PropTypes.object,
    testID: PropTypes.string,
    fullWidth: PropTypes.bool,
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
      testID,
      fullWidth,
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

    const estimatedListHeight = menuItems.length * 48; // 48 is taken from MenuItem.styles#container
    const menuListItemsWrapperStyle =
      estimatedListHeight > height ? { height: 400 } : null;

    return (
      <Menu
        style={[styles.menu, { flex: 1 }]}
        sameWidth
        visible={visible}
        fullWidth={fullWidth}
        modalMenuStyle={{
          marginTop: textFieldProps && textFieldProps.dense ? 60 : 71,
          width: '100%',
          marginLeft: Platform.OS !== 'web' ? 6 : 0,
        }}
        onBackdropPress={() => this.hideMenu()}
        testID={testID}
        button={
          <TouchableHighlight
            onPress={() => this.showMenu()}
            style={[
              styles.button,
              { width: fullWidth ? '100%' : 'auto' },
              buttonStyle,
            ]}
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
        <View style={menuListItemsWrapperStyle}>
          <FlatList
            data={menuItems}
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
        </View>
      </Menu>
    );
  }
}

export default withTheme(Select);
