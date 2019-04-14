import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CodeInline extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    code: PropTypes.node,
    type: PropTypes.string,
  };

  render() {
    const { type } = this.props;
    let color = 'black';
    if (type == 'prop') {
      color = '#00897B';
    } else if (type == 'value') {
      color = '#8E24AA';
    } else if (type == 'element') {
      color = '#E91E63';
    } else if (type == 'file') {
      color = '#0288D1';
    }
    return (
      <Fragment>
        {' '}
        <code
          style={{
            backgroundColor: '#f1f1f1',
            color: color,
            fontFamily: 'monospace',
            padding: 4,
            borderRadius: 4,
            whiteSpace: 'nowrap',
            fontSize: 11,
            letterSpacing: 0.6,
          }}>
          {this.props.code}
        </code>{' '}
      </Fragment>
    );
  }
}

export default CodeInline;
