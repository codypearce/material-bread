import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@components';

import { Ripple, Hoverable } from '../../../src';
class Section extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
  };

  state = {
    color: 'transparent',
  };

  handleHover(toggle) {
    this.setState({
      backgroundColor: toggle ? 'rgba(0,0,0,.12)' : 'transparent',
    });
  }

  render() {
    const { text, img, href, imgWidth, width, height } = this.props;
    const { backgroundColor } = this.state;
    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}>
        <a href={href} style={{ textDecoration: 'none', color: 'black' }}>
          <Ripple
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 16,
              marginRight: 16,
              height: height ? height : 150,
              width: width ? width : 150,
              backgroundColor,
              borderRadius: 10,
            }}
            rippleContainerBorderRadius={10}>
            <img
              src={img}
              style={{ width: imgWidth ? imgWidth : 100, margin: 'auto' }}
            />
            <h4
              style={{
                margin: 0,
                marginTop: 6,
                letterSpacing: 1,
                fontWeight: 400,
                textAlign: 'center',
              }}>
              {text}
            </h4>
          </Ripple>
        </a>
      </Hoverable>
    );
  }
}

export default Section;
