import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import LiveEditToolTip from './LiveEditToolTip';

class LiveEdit extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    code: PropTypes.string,
    scope: PropTypes.object,
    syntax: PropTypes.string,
    noInline: PropTypes.bool,
    livePreviewBackground: PropTypes.string,
  };

  render() {
    const { scope, code, syntax, noInline, livePreviewBackground } = this.props;
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
          borderRadius: 6,
          backgroundColor: '#fafafa',
          boxShadow: '2px 2px 8px 0px rgba(46, 61, 73, 0.15)',
          overflowX: 'auto',
        }}>
        <LivePreview
          style={{
            padding: 24,
            minWidth: 450,

            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
            backgroundColor: livePreviewBackground
              ? livePreviewBackground
              : '#fff',
          }}
        />
        <LiveEditToolTip>
          <LiveEditor
            className={syntax || 'language-jsx'}
            style={{
              margin: 0,
              fontSize: 14,
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
              paddingTop: 24,
              paddingBottom: 20,
              outline: 'none',
              minWidth: 450,
            }}
          />
        </LiveEditToolTip>

        <LiveError
          style={{
            backgroundColor: '#ffebeb',
            color: '#EF5350',
            padding: 24,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            minWidth: 450,
          }}
        />
      </LiveProvider>
    );
  }
}

export default LiveEdit;
