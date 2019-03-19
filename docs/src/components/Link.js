import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Hoverable } from '../../../src/index';

class Link extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  state = {
    color: '#00897B',
  };

  handleHover(toggle) {
    this.setState({ color: toggle ? '#26A69A' : '#00897B' });
  }

  render() {
    const { href, children, style } = this.props;
    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}>
        <a
          href={href}
          style={{
            color: this.state.color,
            textDecoration: 'none',
            ...style,
          }}>
          {children}
        </a>
      </Hoverable>
    );
  }
}

export default Link;
