import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import SequentialDemo from './SequentialDemo';
import CenteredDemo from './CenteredDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />
        <CenteredDemo pageHref={pageHref} />
        <SequentialDemo pageHref={pageHref} />
      </div>
    );
  }
}
