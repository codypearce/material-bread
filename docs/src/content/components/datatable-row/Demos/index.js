import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import CheckboxDemo from './CheckboxDemo';
import SelectedDemo from './SelectedDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader pageHref={pageHref} />
        <CheckboxDemo pageHref={pageHref} />
        <SelectedDemo pageHref={pageHref} />
      </div>
    );
  }
}
