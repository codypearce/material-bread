import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader, CodeInline } from '@components';

import LabelsDemo from './LabelsDemo';
import ColoredDemo from './ColoredDemo';

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
        <ColoredDemo pageHref={pageHref} />
      </div>
    );
  }
}
