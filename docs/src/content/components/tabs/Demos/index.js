import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import LabelsDemo from './LabelsDemo';
import ScrollableDemo from './ScrollableDemo';
import IconsOnly from './IconsOnly';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />

        <LabelsDemo pageHref={pageHref} />
        <IconsOnly pageHref={pageHref} />
        <ScrollableDemo pageHref={pageHref} />
      </div>
    );
  }
}
