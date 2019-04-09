import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { text, img } = this.props;
    const { backgroundColor } = this.state;
    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}>
        <Ripple
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 16,
            marginRight: 16,
            height: 150,
            width: 150,
            backgroundColor,
            borderRadius: 10,
          }}
          rippleContainerBorderRadius={10}>
          <img src={img} style={{ width: 100 }} />
          <h4
            style={{
              margin: 0,
              marginTop: 6,
              letterSpacing: 1,
              fontWeight: 400,
            }}>
            {text}
          </h4>
        </Ripple>
      </Hoverable>
    );
  }
}

export default Section;
