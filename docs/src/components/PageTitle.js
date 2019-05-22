import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageTitle extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <h1
        style={{
          fontSize: 42,
          letterSpacing: 1.2,
          marginBottom: 0,
          wordBreak: 'break-all',
        }}>
        {this.props.children}
      </h1>
    );
  }
}

export default PageTitle;
