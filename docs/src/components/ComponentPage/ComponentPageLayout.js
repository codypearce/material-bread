import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentHeader from './ComponentHeader';
import SideScrollMenu from '../SideScrollMenu';

class ComponentPageLayout extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    description: PropTypes.string,
    docsLink: PropTypes.string,
    title: PropTypes.string,
    componentName: PropTypes.string,
    importCode: PropTypes.string,
    sideScrollMenuItems: PropTypes.array,
    children: PropTypes.node,
  };

  render() {
    const {
      title,
      description,
      docsLink,
      importCode,
      children,
      sideScrollMenuItems,
    } = this.props;

    return (
      <div style={{ marginBottom: 24 }}>
        <SideScrollMenu items={sideScrollMenuItems} />
        <ComponentHeader
          title={title}
          description={description}
          docsLink={docsLink}
          code={importCode}
        />

        {children}
      </div>
    );
  }
}

export default ComponentPageLayout;
