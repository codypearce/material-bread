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
  };

  render() {
    const { name, href, children, id, style } = this.props;
    return (
      <section style={{ marginTop: 60, ...style }} id={id}>
        <SectionHeader name={name} href={href} />
        {children}
      </section>
    );
  }
}

export default Section;
