import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import EndFabDemo from './EndFabDemo';
import NoFabDemo from './NoFabDemo';
import CustomDemo from './CustomDemo';

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

        <EndFabDemo pageHref={pageHref} />
        <NoFabDemo pageHref={pageHref} />
        <CustomDemo pageHref={pageHref} />
      </div>
    );
  }
}
