import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import ExtendedDemo from './ExtendedDemo';
import MiniDemo from './MiniDemo';
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

        <ExtendedDemo pageHref={pageHref} />
        <MiniDemo pageHref={pageHref} />
        <AnimatedDemo pageHref={pageHref} />
      </div>
    );
  }
}
