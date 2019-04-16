import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isHoverEnabled } from './HoverState';

export default class Hoverable extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isHovered: false,
    showHover: true,
  };

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    onHoverIn: PropTypes.func,
    onHoverOut: PropTypes.func,
  };

  _handleMouseEnter = () => {
    if (isHoverEnabled() && !this.state.isHovered) {
      const { onHoverIn } = this.props;
      if (onHoverIn) onHoverIn();
      this.setState(state => ({ ...state, isHovered: true }));
    }
  };

  _handleMouseLeave = () => {
    if (this.state.isHovered) {
      const { onHoverOut } = this.props;
      if (onHoverOut) onHoverOut();
      this.setState(state => ({ ...state, isHovered: false }));
    }
  };

  _handleGrant = () => {
    this.setState(state => ({ ...state, showHover: false }));
  };

  _handleRelease = () => {
    this.setState(state => ({ ...state, showHover: true }));
  };

  render() {
    const { children } = this.props;
    const child =
      typeof children === 'function'
        ? children(this.state.showHover && this.state.isHovered)
        : children;

    return React.cloneElement(React.Children.only(child), {
      onMouseEnter: this._handleMouseEnter,
      onMouseLeave: this._handleMouseLeave,
      onResponderGrant: this._handleGrant,
      onResponderRelease: this._handleRelease,
    });
  }
}
