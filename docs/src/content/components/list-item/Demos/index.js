import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import ActionItemDemo from './ActionItemDemo';
import LeadingActionDemo from './LeadingActionDemo';
import SecondaryDemo from './SecondaryDemo';
import SelectedDemo from './SelectedDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />
        <ActionItemDemo pageHref={pageHref} />
        <LeadingActionDemo pageHref={pageHref} />
        <SecondaryDemo pageHref={pageHref} />
        <SelectedDemo pageHref={pageHref} />
      </div>
    );
  }
}
