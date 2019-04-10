import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Section, ComponentDescription, Link } from '@components';

class ComponentDemoHeader extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    pageHref: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  _defaultDemoHeader() {
    return (
      <div>
        You can see even more examples in the{' '}
        <Link href="https://codypearce.github.io/material-bread/">
          Storybook environment.
        </Link>
      </div>
    );
  }

  render() {
    const { pageHref, description } = this.props;
    return (
      <Section name="Demos" href={`${pageHref}#demos`} id="demos">
        <ComponentDescription
          text={description ? description : this._defaultDemoHeader()}
        />
      </Section>
    );
  }
}

export default ComponentDemoHeader;
