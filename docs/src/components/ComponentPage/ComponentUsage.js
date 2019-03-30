import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CodeBlock, ComponentDescription, Section } from '@components';

class ComponentUsage extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    pageHref: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    propData: PropTypes.array,
    code: PropTypes.string,
  };

  render() {
    const { pageHref, code, description } = this.props;
    return (
      <Section name="Usage" href={`${pageHref}#usage`} id="usage">
        <ComponentDescription text={description} />
        <CodeBlock code={code} canCopy />
      </Section>
    );
  }
}

export default ComponentUsage;
