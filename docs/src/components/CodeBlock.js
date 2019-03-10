import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prismjs from 'prismjs';
import '../styles/components/CodeBlock.css';

class CodeBlock extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    code: PropTypes.string,
    canCopy: PropTypes.bool,
    language: PropTypes.string,
    small: PropTypes.bool,
  };

  state = {
    copySuccess: false,
  };

  componentDidMount() {
    Prismjs.highlightAll();
  }

  copyToClipboard = () => {
    var textField = document.createElement('textarea');
    textField.innerHTML = this.props.code;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    this.setState({ copySuccess: true }, () => {
      setTimeout(() => this.setState({ copySuccess: false }), 800);
    });
  };

  render() {
    const { code, canCopy, language, small } = this.props;
    const { copySuccess } = this.state;
    return (
      <pre
        style={{
          width: small ? 'auto' : '100%',
          borderRadius: 6,
          boxShadow: '0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.23)',
          position: 'relative',
          paddingRight: small ? 44 : 0,
          overflow: 'hidden',
        }}>
        <code
          ref={codeArea => (this.codeArea = codeArea)}
          className={language || 'language-jsx'}
          style={{
            fontSize: 14,
          }}>
          {code}
        </code>
        <div className={`copied ${copySuccess ? 'show' : ''}`}>
          <h3 className="copied__text">Copied!</h3>
        </div>
        {canCopy ? (
          <button
            onClick={this.copyToClipboard}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              fontSize: small ? 11 : 14,
              border: 'none',
              outline: 'none',
              color: '#efefef',
              padding: small ? 5 : 8,
              cursor: 'pointer',
              backgroundColor: '#1e6caf',
              borderBottomLeftRadius: 6,
              zIndex: 4,
            }}>
            Copy
          </button>
        ) : null}
      </pre>
    );
  }
}

export default CodeBlock;
