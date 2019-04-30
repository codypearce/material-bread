import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { navigate } from '@reach/router';
import { ListItem } from '../../../../src';

export class DrawerItem extends Component {
  static propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string,
    link: PropTypes.string,
    selectItem: PropTypes.func,
    selected: PropTypes.bool,
    subItem: PropTypes.bool,
    subsubItem: PropTypes.bool,
  };

  handleClick = () => {
    const { selectItem, label, link } = this.props;
    selectItem(label.toLowerCase());
    navigate(link);
  };

  render() {
    const { label, selected, subItem, subsubItem } = this.props;
    let paddingLeft = subItem ? 12 : 0;
    if (subsubItem) paddingLeft = 24;
    return (
      <ListItem onPress={this.handleClick} selected={selected}>
        <Text
          style={{
            fontSize: 11,
            fontWeight: '500',
            paddingLeft,
            color: '#000',
          }}>
          {label}
        </Text>
      </ListItem>
    );
  }
}

export default DrawerItem;
