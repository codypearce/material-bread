import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Icon from './Icon';
import withTheme from '../Theme/withTheme';

class Dropdown extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    buttonStyle: PropTypes.object,
    marginBottom: PropTypes.number,
    label: PropTypes.string,
    selectedItem: PropTypes.node,
    menuItems: PropTypes.array,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    visible: PropTypes.bool,
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
      marginBottom,
      label,
      selectedItem,
      menuItems,
    } = this.props;

    const { visible } = this.state;
    return (
      <Menu
        style={{
          ...styles.menu,
          flex: 1,
        }}
        menuSameWidthAsButton
        visible={visible}
        button={
          <TouchableHighlight
            onPress={() => this.showMenu()}
            style={{
              ...styles.button,
              marginBottom,
              ...buttonStyle,
            }}
            underlayColor={'transparent'}>
            <View style={styles.innerView}>
              <Text
                style={{
                  ...styles.textSelected,
                  opacity: selectedItem ? 1 : 0,
                }}>
                {label}
              </Text>

              <Text
                style={{
                  ...styles.buttonText,
                  color: selectedItem ? 'black' : 'rgba(0,0,0,0.6)',
                }}>
                {selectedItem ? selectedItem : label}
              </Text>

              <Icon
                name="arrow-drop-down"
                size={24}
                color={'#757575'}
                style={styles.icon}
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
                onPress={() => this.onSelect(item)}
                style={{ flex: 1 }}>
                <Text>{item.name}</Text>
              </MenuItem>
            );
          }}
        />
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.6)',
    borderStyle: 'solid',
    padding: 16,
    marginTop: 8,
    borderRadius: 4,
    position: 'relative',
  },
  innerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 56,
    position: 'relative',
    zIndex: 2,
  },
  buttonText: {
    color: 'rgba(0,0,0,0.6)',
    fontWeight: 'normal',
    fontSize: 16,
    letterSpacing: 0.2,
    margin: 0,
  },
  textSelected: {
    fontWeight: 'normal',
    fontSize: 12,
    letterSpacing: 0.2,
    position: 'absolute',
    backgroundColor: 'white',
    color: 'rgba(0,0,0,0.6)',
    top: -6,
    left: -5,
    zIndex: -1,
    paddingHorizontal: 5,
  },
});

export default withTheme(Dropdown);
