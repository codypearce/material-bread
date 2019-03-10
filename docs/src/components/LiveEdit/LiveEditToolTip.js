import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';

class LiveEditToolTip extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          position: 'relative',
        }}>
        <Tooltip
          title="You can edit/add props, elements, or components. Errors will show below."
          placement={'top'}>
          <span
            style={{
              color: '#00a2b1',
              position: 'absolute',
              right: 0,
              padding: 10,
              marginRight: 8,
              fontSize: 12,
              cursor: 'pointer',
            }}>
            Live Editing
          </span>
        </Tooltip>

        {children}
      </div>
    );
  }
}

export default LiveEditToolTip;
