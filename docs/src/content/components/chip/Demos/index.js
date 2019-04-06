import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader, CodeInline } from '@components';

import DeleteChipDemo from './DeleteChipDemo';
import IconsDemo from './IconsDemo';
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
            <div>
              Chips have two styles: <CodeInline code="filled" type="value" />{' '}
              or <CodeInline code="outlined" type="value" />. Adding{' '}
              <CodeInline code="onPress" type="prop" />
              will make the entire chip clickable. The rest can be customized as
              shown below.
            </div>
          }
        />

        <DeleteChipDemo pageHref={pageHref} />
        <IconsDemo pageHref={pageHref} />
        <CustomDemo pageHref={pageHref} />
      </div>
    );
  }
}
