import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CodeInline extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    code: PropTypes.node,
  };

  render() {
    return (
      <code
        style={{
          backgroundColor: '#2d2d2d',
          color: 'white',
          fontFamily: 'monospace',
          padding: 4,
          borderRadius: 4,
          whiteSpace: 'nowrap',
          fontSize: 12,
        }}>
        {this.props.code}
      </code>
    );
  }
}

export default CodeInline;
