import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideScrollItem extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    link: PropTypes.string,
    name: PropTypes.string,
    sub: PropTypes.bool,
  };

  render() {
    const { link, name, sub } = this.props;

    return (
      <li
        className={`SideMenu__ListItem ${
          sub ? 'SideMenu__ListItem--sub' : ''
        }`}>
        <a className="SideMenu__Link" href={`#${link}`}>
          {name}
        </a>
      </li>
    );
  }
}

export default SideScrollItem;
