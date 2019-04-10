import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LiveEdit, ComponentDescription, Section } from '@components';

class ComponentDemo extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    sectionName: PropTypes.string,
    sectionHref: PropTypes.string,
    sectionId: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    code: PropTypes.string,
    scope: PropTypes.object,
    noInline: PropTypes.bool,
  };

  render() {
    const {
      sectionName,
      sectionHref,
      sectionId,
      description,
      code,
      scope,
      noInline,
      livePreviewBackground,
    } = this.props;
    return (
      <Section name={sectionName} href={sectionHref} id={sectionId}>
        <ComponentDescription text={description} />
        <LiveEdit
          code={code}
          scope={scope}
          noInline={noInline}
          livePreviewBackground={livePreviewBackground}
        />
      </Section>
    );
  }
}

export default ComponentDemo;
