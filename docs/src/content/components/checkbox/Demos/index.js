import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import LabelsDemo from './LabelsDemo';
import IconsDemo from './IconsDemo';
import IOSDemo from './IOSDemo';

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
        <IconsDemo pageHref={pageHref} />
        <IOSDemo pageHref={pageHref} />
      </div>
    );
  }
}
