import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageTitle extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string,
    href: PropTypes.string,
  };

  render() {
    const { name, href } = this.props;
    return (
      <h3
        style={{ fontWeight: 400, fontSize: 28, marginBottom: 16 }}
        className="Section__header">
        <span>{name}</span>{' '}
        <a className="HashLink" href={href}>
          #
        </a>
      </h3>
    );
  }
}

export default PageTitle;
