import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageTitle extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    description: PropTypes.string,
    docsLink: PropTypes.string,
  };

  render() {
    const { description, docsLink } = this.props;
    return (
      <p style={{ color: 'rgba(0, 0, 0, 0.57)', marginTop: 16 }}>
        {description}
        {' - '}
        <a href={docsLink} style={{ textDecoration: 'none' }}>
          Material Docs
        </a>
      </p>
    );
  }
}

export default PageTitle;
