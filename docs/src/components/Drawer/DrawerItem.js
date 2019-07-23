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
    icon: PropTypes.string,
  };

  handleClick = () => {
    const { selectItem, label, link } = this.props;
    selectItem(label.toLowerCase());
    navigate(link);
  };

  render() {
    const { label, selected, subItem, subsubItem, icon } = this.props;
    let marginLeft = subItem ? -6 : 0;
    if (subsubItem) marginLeft = 0;
    return (
      <ListItem
        onPress={this.handleClick}
        selected={selected}
        media={
          icon ? (
            <i
              className={`fa fa-${icon}`}
              style={{ fontSize: 20, width: 20, color: 'white' }}
            />
          ) : null
        }
        style={{
          backgroundColor: '#04023d',
          marginLeft,
          paddingTop: subItem || subsubItem ? 12 : 16,
          paddingBottom: subItem || subsubItem ? 12 : 16,
        }}
        rippleProps={{ rippleColor: '#fff', rippleContainerBorderRadius: 4 }}>
        <Text
          style={{
            fontSize: 11,
            fontWeight: '400',
            // paddingLeft,
            color: '#fff',
          }}>
          {label}
        </Text>
      </ListItem>
    );
  }
}

export default DrawerItem;
