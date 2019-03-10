import React, { Component } from 'react';
import Prismjs from 'prismjs';

import SideScrollMenu from '../../components/SideScrollMenu';
import { Appbar } from '../../../../src/index';

import ComponentHeader from '../../components/ComponentPage/ComponentHeader';
import SectionHeader from '../../components/SectionHeader';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import CodeBlock from '../../components/CodeBlock';
import PropsTable from '../../components/PropsTable';
import createPropData from '../../utils/createPropData';

const propData = [
  createPropData(
    'backgroundColor',
    'styles root backgroundColor',
    'string',
    'Theme.primaryColor',
  ),
  createPropData('position', 'adds position as expected', 'string', 'fixed'),
  createPropData('style', 'styles the root component', 'object', ''),
];

export default class AppbarPage extends Component {
  componentDidMount() {
    Prismjs.highlightAll();
  }
  render() {
    const sections = [
      { name: 'Component' },
      { name: 'Usage' },
      { name: 'Props' },
      { name: 'Demos' },
      { name: 'with search', sub: true },
    ];

    return (
      <div>
        <SideScrollMenu items={sections} />

        <ComponentHeader
          title={'Appbar Top'}
          description={
            'The top app bar displays information and actions relating to the current screen.'
          }
          docsLink={'https://material.io/design/components/app-bars-top.html'}
          code={`import { Appbar } from 'material-bread'`}
        />

        <div style={{ marginTop: 60 }} id="component">
          <SectionHeader name="Component" href="/components/appbar#component" />
          <LiveEdit code="<Appbar title={'Page Title'} />" scope={{ Appbar }} />
        </div>
        <div style={{ marginTop: 60 }} id="usage">
          <SectionHeader name="Usage" href="/components/appbar#usage" />

          <div className="row ">
            <CodeBlock
              code={`import react  from 'react';
import { View } from 'react-native';
import { Appbar } from 'material-bread';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Appbar title={'Page Title'} />
      <View>

    );
  }
}`}
              canCopy
            />
          </div>
        </div>
        <div style={{ marginTop: 60 }} id="props">
          <SectionHeader name="Props" href="/components/appbar#props" />
          <PropsTable data={propData} />
        </div>
        <div style={{ marginTop: 60 }} id="demos">
          <SectionHeader name="Demos" href="/components/appbar#demos" />
        </div>
        <div style={{ marginTop: 60 }} id="with-search">
          <SectionHeader name="Demos" href="/components/appbar#demos" />
        </div>
      </div>
    );
  }
}
