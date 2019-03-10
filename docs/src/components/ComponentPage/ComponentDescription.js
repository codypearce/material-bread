import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentDescription extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;
    return (
      <p
        style={{
          color: 'rgba(0, 0, 0, 0.57)',
          fontSize: 14,
          lineHeight: 1.5,
        }}>
        {text}
      </p>
    );
  }
}

export default ComponentDescription;
