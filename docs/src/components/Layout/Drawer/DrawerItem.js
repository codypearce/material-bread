import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import { navigate } from '@reach/router';

export class DrawerItem extends Component {
  static propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string,
    link: PropTypes.string,
    selectItem: PropTypes.func,
    selected: PropTypes.bool,
    subItem: PropTypes.bool,
  };

  handleClick = () => {
    const { selectItem, label, link } = this.props;
    selectItem(label.toLowerCase());
    navigate(link);
  };

  render() {
    const { label, selected, subItem } = this.props;

    return (
      <ListItem button onClick={this.handleClick} selected={selected}>
        <ListItemText
          primary={label}
          style={{
            fontSize: 13,
            fontWeight: 500,
            paddingLeft: subItem ? 10 : 0,
            color: '#000',
          }}
          disableTypography
        />
      </ListItem>
    );
  }
}

export default DrawerItem;
