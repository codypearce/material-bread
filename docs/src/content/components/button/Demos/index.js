import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import ContainedDemo from './ContainedDemo';
import OutlinedDemo from './OutlinedDemo';
import FlatDemo from './FlatDemo';
import TextDemo from './TextDemo';
import IconsDemo from './IconsDemo';
import FullWidthDemo from './FullWidthDemo';
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

        <ContainedDemo pageHref={pageHref} />
        <OutlinedDemo pageHref={pageHref} />
        <FlatDemo pageHref={pageHref} />
        <TextDemo pageHref={pageHref} />
        <IconsDemo pageHref={pageHref} />
        <FullWidthDemo pageHref={pageHref} />
        <CustomDemo pageHref={pageHref} />
      </div>
    );
  }
}
