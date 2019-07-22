import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
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
        <span
          data-tip={
            'You can edit/add props, elements, or components. Errors will show below.'
          }
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
        <ReactTooltip place={'top'} effect={'solid'} />
        {children}
      </div>
    );
  }
}

export default LiveEditToolTip;
