import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BackgroundColors extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  render() {
    const { children, style, isAppbar } = this.props;
    return (
      <div style={{}}>
        <div
          style={{
            position: 'absolute',
            top: isAppbar ? 40 : 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '0 660px 220px 0',
            borderColor: 'transparent #2196F3 transparent transparent',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: isAppbar ? 40 : 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '0 600px 200px 0',
            borderColor: 'transparent #66BB6A transparent transparent',
          }}
        />
      </div>
    );
  }
}

export default BackgroundColors;
