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
    style: PropTypes.object,
    fontSize: PropTypes.number,
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
      setTimeout(() => this.setState({ copySuccess: false }), 1000);
    });
  };

  render() {
    const { code, canCopy, language, small, style, fontSize } = this.props;
    const { copySuccess } = this.state;
    return (
      <pre
        className={'CodeBlock'}
        style={{
          width: small ? 'auto' : 'auto',
          paddingRight: small ? 44 : 16,
          ...style,
        }}>
        <code
          ref={codeArea => (this.codeArea = codeArea)}
          className={language || 'language-jsx'}
          style={{
            fontSize: fontSize ? fontSize : 14,
          }}>
          {code}
        </code>

        {canCopy ? (
          <button
            onClick={this.copyToClipboard}
            className={'copy__button'}
            style={{ fontSize: small ? 11 : 14, padding: small ? 5 : 8 }}>
            {copySuccess ? 'Copied' : 'Copy'}
          </button>
        ) : null}
      </pre>
    );
  }
}

export default CodeBlock;
