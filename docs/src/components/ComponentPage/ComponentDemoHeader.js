import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Section, ComponentDescription } from '@components';

class ComponentDemoHeader extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    pageHref: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  render() {
    const { pageHref, description } = this.props;
    return (
      <Section name="Demos" href={`${pageHref}#demos`} id="demos">
        <ComponentDescription text={description} />
      </Section>
    );
  }
}

export default ComponentDemoHeader;
