import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideScrollItem extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    link: PropTypes.string,
    name: PropTypes.string,
    subItem: PropTypes.bool,
  };

  render() {
    const { link, name, subItem } = this.props;

    return (
      <li
        className={`SideMenu__ListItem ${
          subItem ? 'SideMenu__ListItem--sub' : ''
        }`}>
        <a className="SideMenu__Link" href={`#${link}`}>
          {name}
        </a>
      </li>
    );
  }
}

export default SideScrollItem;
