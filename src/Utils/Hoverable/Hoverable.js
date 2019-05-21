import React, { Component } from 'react';
import PropTypes from 'prop-types';

import createHoverMonitor from './HoverState';
const hover = createHoverMonitor();

class Hoverable extends Component {
  static displayName = 'Hoverable';
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    onHoverIn: PropTypes.func,
    onHoverOut: PropTypes.func,
  };

  state = { isHovered: false };

  _handleMouseEnter = () => {
    if (hover.isEnabled && !this.state.isHovered) {
      const { onHoverIn } = this.props;
      if (onHoverIn) {
        onHoverIn();
      }
      this.setState(() => ({ isHovered: true }));
    }
  };

  _handleMouseLeave = () => {
    if (this.state.isHovered) {
      const { onHoverOut } = this.props;
      if (onHoverOut) {
        onHoverOut();
      }
      this.setState(() => ({ isHovered: false }));
    }
  };

  render() {
    const { children } = this.props;

    const child =
      typeof children === 'function'
        ? children(this.state.isHovered)
        : children;

    return React.cloneElement(React.Children.only(child), {
      onMouseEnter: this._handleMouseEnter,
      onMouseLeave: this._handleMouseLeave,
    });
  }
}

export default Hoverable;
