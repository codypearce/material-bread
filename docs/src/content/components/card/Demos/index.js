import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import ActionMediaDemo from './ActionMediaDemo';
import ClickableDemo from './ClickableDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader
          pageHref={pageHref}
          description={
            'You can see even more examples in the Storybook playground.'
          }
        />

        <ActionMediaDemo pageHref={pageHref} />
        <ClickableDemo pageHref={pageHref} />
      </div>
    );
  }
}
