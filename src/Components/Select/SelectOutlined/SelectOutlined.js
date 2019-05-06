import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, FlatList } from 'react-native';

import { Menu, MenuItem, Icon, TextField } from '../../..';

import withTheme from '../../../Theme/withTheme';
import styles from './SelectOutlined.styles';

class Select extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    buttonStyle: PropTypes.object,
    label: PropTypes.string,
    selectedItem: PropTypes.node,
    menuItems: PropTypes.array,
    visible: PropTypes.bool,
    textFieldProps: PropTypes.object,
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
    } = this.props;

    const { visible } = this.state;
    return (
      <Menu
        style={[styles.menu, { flex: 1 }]}
        sameWidth
        visible={visible}
        modalMenuStyle={{ marginTop: 72 }}
        button={
          <TouchableHighlight
            onPress={() => this.showMenu()}
            style={[styles.button, buttonStyle]}
            underlayColor={'transparent'}>
            <View style={styles.innerView}>
              <TextField
                type={'outlined'}
                label={label}
                value={selectedItem}
                focused={visible}
                editable={false}
                style={[
                  styles.textField,
                  textFieldProps && textFieldProps.style,
                ]}
                trailingIcon={
                  <Icon
                    name="arrow-drop-down"
                    size={24}
                    color={'#757575'}
                    style={styles.icon}
                  />
                }
                {...textFieldProps}
              />
            </View>
          </TouchableHighlight>
        }>
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
