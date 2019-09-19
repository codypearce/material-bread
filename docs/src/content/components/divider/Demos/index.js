import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import SubheaderDemo from './SubheaderDemo';
import InsetLeftDemo from './InsetLeftDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;

    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />

        <SubheaderDemo pageHref={pageHref} />
        <InsetLeftDemo pageHref={pageHref} />
      </div>
    );
  }
}
