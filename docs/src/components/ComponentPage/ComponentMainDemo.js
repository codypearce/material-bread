import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LiveEdit, ComponentDescription, Section } from '@components';

class ComponentDemo extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    pageHref: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    code: PropTypes.string,
    scope: PropTypes.object,
    noInline: PropTypes.bool,
  };

  render() {
    const { pageHref, description, code, scope, noInline } = this.props;
    return (
      <Section name="Component" href={`${pageHref}#usage`} id="component">
        <ComponentDescription text={description} />
        <LiveEdit code={code} scope={scope} noInline={noInline} />
      </Section>
    );
  }
}

export default ComponentDemo;
