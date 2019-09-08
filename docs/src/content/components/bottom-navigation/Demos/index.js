import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import LabelsDemo from './LabelsDemo';
import ColoredDemo from './ColoredDemo';
import IconsOnly from './IconsOnly';
import LandscapeDemo from './LandscapeDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />
        <LandscapeDemo pageHref={pageHref} />
        <LabelsDemo pageHref={pageHref} />
        <ColoredDemo pageHref={pageHref} />
        <IconsOnly pageHref={pageHref} />
      </div>
    );
  }
}
