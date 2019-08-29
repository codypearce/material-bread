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
        style={{
          fontWeight: 600,
          fontSize: 32,
          marginBottom: 16,
          marginTop: 0,
          color: '#5a6484',
        }}
        className="Section__header">
        <span>{name}</span>{' '}
        <a style={{ color: '#5a6484' }} className="HashLink" href={href}>
          #
        </a>
      </h3>
    );
  }
}

export default PageTitle;
