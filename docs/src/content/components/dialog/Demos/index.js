import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import AlertDemo from './AlertDemo';
import SimpleDemo from './SimpleDemo';

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
            <div>
              You can create the dialogs shown in the Material Docs by adding
              components as children.
            </div>
          }
        />

        <AlertDemo pageHref={pageHref} />
        <SimpleDemo pageHref={pageHref} />
      </div>
    );
  }
}
