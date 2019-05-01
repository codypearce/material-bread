import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import LoaderDemo from './LoaderDemo';
import LabelsDemo from './LabelsDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />
        <LoaderDemo pageHref={pageHref} />
        <LabelsDemo pageHref={pageHref} />
      </div>
    );
  }
}
