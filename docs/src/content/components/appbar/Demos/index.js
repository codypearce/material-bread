import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import ImageDemo from './ImageDemo';
import SearchFieldDemo from './SearchFieldDemo';
import SearchBarDemo from './SearchBarDemo';
import SubtitleDemo from './SubtitleDemo';
import MenuDemo from './MenuDemo';
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

        <ImageDemo pageHref={pageHref} />
        <SearchFieldDemo pageHref={pageHref} />
        <SearchBarDemo pageHref={pageHref} />
        <SubtitleDemo pageHref={pageHref} />
        <MenuDemo paageHref={pageHref} />
        <CustomDemo pageHref={pageHref} />
      </div>
    );
  }
}
