import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentDescription extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };

  render() {
    const { text } = this.props;
    return (
      <div
        style={{
          color: 'rgba(0, 0, 0, 0.57)',
          fontSize: 14,
          lineHeight: 1.6,
          marginBottom: 16,
        }}>
        {text}
      </div>
    );
  }
}

export default ComponentDescription;
