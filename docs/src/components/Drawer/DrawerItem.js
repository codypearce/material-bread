import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { navigate } from '@reach/router';
import { ListItem } from '../../../../src';
import Icon from 'react-native-vector-icons/FontAwesome';

export class DrawerItem extends Component {
  static propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string,
    link: PropTypes.string,
    selectItem: PropTypes.func,
    selected: PropTypes.bool,
    subItem: PropTypes.bool,
    subsubItem: PropTypes.bool,
    icon: PropTypes.string,
  };

  handleClick = () => {
    const { selectItem, label, link } = this.props;
    selectItem(label.toLowerCase());
    navigate(link);
  };

  render() {
    const { label, selected, subItem, subsubItem, icon } = this.props;
    let paddingLeft = subItem ? 12 : 0;
    if (subsubItem) paddingLeft = 24;
    return (
      <ListItem
        onPress={this.handleClick}
        selected={selected}
        media={
          <i
            className={`fa fa-${icon}`}
            style={{ fontSize: 20, color: 'white' }}
          />
        }
        style={{
          backgroundColor: '#04023d',
          paddingTop: 16,
          paddingBottom: 16,
        }}
        rippleProps={{ rippleColor: '#fff', rippleContainerBorderRadius: 4 }}>
        <Text
          style={{
            fontSize: 11,
            fontWeight: '400',
            paddingLeft,
            color: '#fff',
          }}>
          {label}
        </Text>
      </ListItem>
    );
  }
}

export default DrawerItem;
