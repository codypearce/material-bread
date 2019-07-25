import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
    style: PropTypes.object,
  };

  render() {
    const { name, href, children, id, style } = this.props;
    return (
      <section
        className="CardSection"
        style={{
          marginTop: 60,
          background: '#fefefe',
          boxShadow: '2px 2px 15px 0px rgba(46, 61, 73, 0.15)',
          borderRadius: 6,

          ...style,
        }}
        id={id}>
        <SectionHeader name={name} href={href} />
        {children}
      </section>
    );
  }
}

export default Section;
