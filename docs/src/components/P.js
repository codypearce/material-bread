import React, { Component } from 'react';
import PropTypes from 'prop-types';

class P extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  render() {
    const { children, style } = this.props;
    return (
      <p
        style={{
          color: 'rgba(0, 0, 0, 0.67)',
          marginTop: 16,
          lineHeight: 1.5,
          ...style,
        }}>
        {children}
      </p>
    );
  }
}

export default P;
