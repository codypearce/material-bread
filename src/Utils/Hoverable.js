import { isHoverEnabled } from './HoverState';
import { element, func, oneOfType } from 'prop-types';
import React, { Component } from 'react';

export default class Hoverable extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false, showHover: true };
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleGrant = this._handleGrant.bind(this);
    this._handleRelease = this._handleRelease.bind(this);
  }

  _handleMouseEnter() {
    if (isHoverEnabled() && !this.state.isHovered) {
      const { onHoverIn } = this.props;
      if (onHoverIn) onHoverIn();
      this.setState(state => ({ ...state, isHovered: true }));
    }
  }

  _handleMouseLeave() {
    if (this.state.isHovered) {
      const { onHoverOut } = this.props;
      if (onHoverOut) onHoverOut();
      this.setState(state => ({ ...state, isHovered: false }));
    }
  }

  _handleGrant() {
    this.setState(state => ({ ...state, showHover: false }));
  }

  _handleRelease() {
    this.setState(state => ({ ...state, showHover: true }));
  }

  render() {
    const { children } = this.props;
    const child =
      typeof children === 'function'
        ? children(this.state.showHover && this.state.isHovered)
        : children;

    return React.cloneElement(React.Children.only(child), {
      onMouseEnter: this._handleMouseEnter,
      onMouseLeave: this._handleMouseLeave,
      // prevent hover showing while responder
      onResponderGrant: this._handleGrant,
      onResponderRelease: this._handleRelease,
    });
  }
}

Hoverable.displayName = 'Hoverable';

Hoverable.propTypes = {
  children: oneOfType([func, element]),
  onHoverIn: func,
  onHoverOut: func,
};
