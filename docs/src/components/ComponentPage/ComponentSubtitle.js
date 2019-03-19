import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
class ComponentSubtitle extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    description: PropTypes.string,
    docsLink: PropTypes.string,
  };

  _renderDocsLink() {
    const { docsLink } = this.props;
    return (
      <Fragment>
        {'  - '}
        <Link href={docsLink}>Material Docs</Link>
      </Fragment>
    );
  }

  render() {
    const { description, docsLink } = this.props;
    return (
      <p style={{ color: 'rgba(0, 0, 0, 0.57)', marginTop: 16 }}>
        {description}
        {docsLink ? this._renderDocsLink() : null}
      </p>
    );
  }
}

export default ComponentSubtitle;
