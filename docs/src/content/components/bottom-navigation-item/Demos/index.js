import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import BadgeDemo from './BadgeDemo';
import StyledDemo from './StyledDemo';
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

        <BadgeDemo pageHref={pageHref} />
        <StyledDemo pageHref={pageHref} />
        <CustomDemo pageHref={pageHref} />
      </div>
    );
  }
}
