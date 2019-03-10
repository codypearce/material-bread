import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prismjs from 'prismjs';

class CodeImport extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    code: PropTypes.string,
    canCopy: PropTypes.bool,
  };

  componentDidMount() {
    Prismjs.highlightAll();
  }

  render() {
    const { code, canCopy } = this.props;
    return (
      <pre
        style={{
          padding: 12,
          borderRadius: 6,
          position: 'relative',
          paddingRight: 44,
          boxShadow: '0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.23)',
        }}>
        <code
          className="language-javascript"
          style={{
            fontSize: 14,
          }}>
          {code}
        </code>
        {canCopy ? (
          <button
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              fontSize: 11,
              border: 'none',
              outline: 'none',
              color: '#efefef',
              padding: 5,
              cursor: 'pointer',
              backgroundColor: '#1e6caf',
              borderBottomLeftRadius: 6,
            }}>
            Copy
          </button>
        ) : null}
      </pre>
    );
  }
}

export default CodeImport;
