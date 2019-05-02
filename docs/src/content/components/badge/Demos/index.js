import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import DotDemo from './DotDemo';
import AnimatedDemo from './AnimatedDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />
        <DotDemo pageHref={pageHref} />
        <AnimatedDemo pageHref={pageHref} />
      </div>
    );
  }
}
