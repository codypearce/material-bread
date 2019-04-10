import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import IconDemo from './IconDemo';
import TextDemo from './TextDemo';
import CustomDemo from './CustomDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />

        <IconDemo pageHref={pageHref} />
        <TextDemo pageHref={pageHref} />
        <CustomDemo pageHref={pageHref} />
      </div>
    );
  }
}
