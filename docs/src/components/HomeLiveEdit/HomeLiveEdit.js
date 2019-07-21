import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import HomeLiveEditToolTip from './HomeLiveEditToolTip';
import BrowserCSS from '../BrowserCSS';

class LiveEdit extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    code: PropTypes.string,
    scope: PropTypes.object,
    syntax: PropTypes.string,
    noInline: PropTypes.bool,
    preview: PropTypes.string,
  };

  render() {
    const { scope, code, syntax, noInline, preview } = this.props;
    if (typeof window == 'undefined') {
      return null;
    }
    return (
      <LiveProvider
        code={code}
        scope={scope}
        mountStylesheet={false}
        noInline={noInline}
        style={{
          // boxShadow: '0 2px 4px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.23)',
          borderRadius: 6,
          backgroundColor: 'transparent',
        }}>
        <BrowserCSS preview={preview}>
          <LivePreview
            style={{
              padding: 24,
              borderTopRightRadius: 6,
              borderTopLeftRadius: 6,
              backgroundColor: 'transparent',
            }}
          />
        </BrowserCSS>

        <HomeLiveEditToolTip>
          <LiveEditor
            className={syntax || 'language-jsx'}
            style={{
              margin: 0,
              fontSize: 14,
              borderRadius: 6,
              paddingTop: 24,
              paddingBottom: 20,
              outline: 'none',
              width: '100%',
            }}
          />
        </HomeLiveEditToolTip>

        <LiveError
          style={{
            backgroundColor: '#ffebeb',
            color: '#EF5350',
            padding: 24,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          }}
        />
      </LiveProvider>
    );
  }
}

export default LiveEdit;
