import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentHeader from './ComponentHeader';
import LiveEdit from '../LiveEdit/LiveEdit';
import CodeBlock from '../CodeBlock';
import PropsTable from '../PropsTable';
import Section from '../Section';
import SideScrollMenu from '../SideScrollMenu';
import ComponentDescription from './ComponentDescription';

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
    propData: PropTypes.array,
    children: PropTypes.node,
    liveEditScope: PropTypes.object,
    liveEditCode: PropTypes.string,
    usageCode: PropTypes.string,
    componentDescription: PropTypes.string,
    usageDescription: PropTypes.string,
    liveEditNoInline: PropTypes.bool,
    propsDescription: PropTypes.string,
  };

  render() {
    const {
      title,
      componentName,
      description,
      docsLink,
      importCode,
      children,
      propData,
      sideScrollMenuItems,
      liveEditScope,
      liveEditCode,
      usageCode,
      componentDescription,
      usageDescription,
      liveEditNoInline,
      propsDescription,
    } = this.props;

    const scrollItems = [
      { name: 'Component' },
      { name: 'Usage' },
      { name: 'Props' },
      ...sideScrollMenuItems,
    ];
    return (
      <div style={{ marginBottom: 24 }}>
        <SideScrollMenu items={scrollItems} />
        <ComponentHeader
          title={title}
          description={description}
          docsLink={docsLink}
          code={importCode}
        />
        <Section
          name="Component"
          href={`/components/${componentName}#component`}
          id="component">
          <ComponentDescription text={componentDescription} />
          <LiveEdit
            code={liveEditCode}
            scope={liveEditScope}
            noInline={liveEditNoInline}
          />
        </Section>

        <Section
          name="Usage"
          href={`/components/${componentName}#usage`}
          id="usage">
          <ComponentDescription text={usageDescription} />
          <CodeBlock code={usageCode} canCopy />
        </Section>
        {propData ? (
          <Section
            name="Props"
            href={`/components/${componentName}#props`}
            id="props">
            <ComponentDescription text={propsDescription} />
            <PropsTable data={propData} />
          </Section>
        ) : null}

        {children}
      </div>
    );
  }
}

export default ComponentPageLayout;
