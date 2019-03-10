import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import SideScrollItem from './SideScrollItem';

class SideScrollMenu extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    items: PropTypes.array,
  };

  formatLinkFromName(str) {
    str = str.replace(/\s+/g, '-').toLowerCase();
    return str;
  }

  handleLinks() {
    const { items } = this.props;
    const sections = items.map(item => {
      return this.formatLinkFromName(item.name);
    });
    return sections;
  }

  renderMenuItems(item, index) {
    const link = this.formatLinkFromName(item.name);

    return (
      <SideScrollItem key={index} name={item.name} link={link} sub={item.sub} />
    );
  }
  render() {
    const { items } = this.props;
    return (
      <Scrollspy
        items={this.handleLinks()}
        currentClassName="is-current"
        className="SideMenu">
        {items && items.map((item, index) => this.renderMenuItems(item, index))}
      </Scrollspy>
    );
  }
}

export default SideScrollMenu;
