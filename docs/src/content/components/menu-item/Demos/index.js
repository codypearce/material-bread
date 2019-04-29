import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import IconDemo from './IconDemo';
import KeyboardDemo from './KeyboardDemo';

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
        <KeyboardDemo pageHref={pageHref} />
      </div>
    );
  }
}
