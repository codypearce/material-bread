import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import PageTitle from '../PageTitle';
import ComponentSubtitle from './ComponentSubtitle';
import CodeImport from '../CodeImport';

class ComponentHeader extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    description: PropTypes.string,
    docsLink: PropTypes.string,
    title: PropTypes.string,
    code: PropTypes.string,
  };

  render() {
    const { title, description, docsLink, code } = this.props;
    return (
      <Fragment>
        <PageTitle>{title}</PageTitle>
        <ComponentSubtitle description={description} docsLink={docsLink} />
        <div className="row">
          <CodeImport code={code} canCopy />
        </div>
      </Fragment>
    );
  }
}

export default ComponentHeader;
