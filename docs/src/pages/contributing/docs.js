import React, { Component } from 'react';

import Prism from 'prismjs';
import {
  PageTitle,
  ComponentSubtitle,
  Section,
  ComponentDescription,
  CodeInline,
  Link,
  SideScrollMenu,
  Helmet,
} from '@components';
import { DataTable, DataTableCell, DataTableRow } from '../../../../src';
const sections = [{ name: 'Started' }, { name: 'Setup' }];

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'Contribute to docs'} />
        <PageTitle>Contributing to Docs</PageTitle>
        <ComponentSubtitle
          description={
            'All contributions are welcome, please follow the guide below to get started'
          }
        />
        <SideScrollMenu items={sections} />
        <Section
          name="Getting Started"
          id="started"
          href="/contributing/docs#tarted"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                <div style={{ marginTop: 8, marginBottom: 8 }}>
                  Documentation is built using{' '}
                  <Link href="https://www.gatsbyjs.org/">Gatsbyjs</Link>.
                </div>
                The main folders and files are in the{' '}
                <CodeInline code="docs" type={''} /> folder.
                <DataTable
                  style={{ marginTop: 8, marginBottom: 8, maxWidth: 400 }}>
                  <DataTableRow style={{ backgroundColor: 'rgba(0,0,0,.12)' }}>
                    <DataTableCell text={'folder'} type={'header'} />
                    <DataTableCell text={'description'} type={'header'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'assets'} />
                    <DataTableCell text={'media and fonts'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'components'} />
                    <DataTableCell text={'general doc components'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'content'} />
                    <DataTableCell text={'components for pages'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'navigation'} />
                    <DataTableCell text={'defined routes and subitems'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'pages'} />
                    <DataTableCell text={'all site pages'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'styles'} />
                    <DataTableCell text={'limited css styles'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'utils'} />
                    <DataTableCell text={'useful functions'} />
                  </DataTableRow>
                </DataTable>
              </div>
            }
          />
        </Section>

        <Section
          name="Setup"
          id="setup"
          href="/contributing/docs#setup"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                <ol>
                  <li>Fork material-bread repo on github</li>
                  <li>
                    Clone the fork to your machine{' '}
                    <CodeInline
                      code="git clone git@github.com:codypearce/material-bread.git"
                      type={''}
                    />
                  </li>
                  <li>
                    Cd into project docs{' '}
                    <CodeInline code="cd material-bread/docs" type={''} />
                  </li>
                  <li>
                    Install dependencies by running{' '}
                    <CodeInline code="npm i" type={''} /> or{' '}
                    <CodeInline code="yarn" type={''} />
                  </li>
                  <li>
                    Start up Gatsby{' '}
                    <CodeInline code="npm run develop" type={''} />
                  </li>
                </ol>
                Wait for the project to build and it should be running at
                <CodeInline code="localhost:8000" type={''} />.
              </div>
            }
          />
        </Section>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    paddingBottom: 60,
  },
  code: {},
};

export default Index;
