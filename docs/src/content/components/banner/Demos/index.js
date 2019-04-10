import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader, Link } from '@components';

import SingleLineDemo from './SingleLineDemo';
import ThreeLineDemo from './ThreeLineDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />

        <SingleLineDemo pageHref={pageHref} />
        <ThreeLineDemo pageHref={pageHref} />
      </div>
    );
  }
}
