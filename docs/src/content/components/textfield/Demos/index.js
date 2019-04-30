import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import LeadingIconDemo from './LeadingIconDemo';
import TrailingIconDemo from './TrailingIconDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />
        <LeadingIconDemo pageHref={pageHref} />
        <TrailingIconDemo pageHref={pageHref} />
      </div>
    );
  }
}
