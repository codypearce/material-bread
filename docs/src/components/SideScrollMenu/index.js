import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';

class SideScrollMenu extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    items: PropTypes.array,
  };

  state = {
    slideTop: 0,
    height: 60,
  };

  componentDidMount() {
    const { items } = this.props;
    this.setState({ height: items.length * 30 });
  }

  formatLinkFromName(str) {
    str = str.replace(/\s+/g, '-').toLowerCase();
    return str.toString();
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
      <a className="SideMenu__Link" href={`#${link}`} key={index}>
        <li
          className={`SideMenu__ListItem ${
            item.sub ? 'SideMenu__ListItem--sub' : ''
          }`}>
          {item.name}
        </li>
      </a>
    );
  }

  animateSlideItem(id) {
    if (!id) return;
    const items = this.handleLinks();
    const index = items.findIndex(item => item == id);
    this.setState({ slideTop: 30 * index });
  }

  render() {
    const { items } = this.props;
    if (typeof window == 'undefined') {
      return null;
    }
    return ReactDOM.createPortal(
      <div className="SideMenuWrapper">
        <li
          className="sliding-wrapper"
          style={{ height: `${this.state.height}px` }}
        />
        <li
          className="sliding-border"
          style={{ transform: `translateY(${this.state.slideTop}px)` }}
        />

        <Scrollspy
          onUpdate={stuff => this.animateSlideItem(stuff && stuff.id)}
          items={this.handleLinks()}
          currentClassName="is-current"
          className="SideMenu">
          {items &&
            items.map((item, index) => this.renderMenuItems(item, index))}
        </Scrollspy>
      </div>,
      document.body,
    );
  }
}

export default SideScrollMenu;
