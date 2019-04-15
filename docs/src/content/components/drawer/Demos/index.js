import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import ClippedDemo from './ClippedDemo';
import PushDemo from './PushDemo';
import PermanentDemo from './PermanentDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />
        <ClippedDemo pageHref={pageHref} />
        <PushDemo pageHref={pageHref} />
        <PermanentDemo pageHref={pageHref} />
      </div>
    );
  }
}
