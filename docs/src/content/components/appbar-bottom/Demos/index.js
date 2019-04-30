import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import EndFabDemo from './EndFabDemo';
import NoFabDemo from './NoFabDemo';
import SpeedDialDemo from './SpeedDialDemo';
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

        <EndFabDemo pageHref={pageHref} />
        <NoFabDemo pageHref={pageHref} />
        <SpeedDialDemo pageHref={pageHref} />
        <CustomDemo pageHref={pageHref} />
      </div>
    );
  }
}
