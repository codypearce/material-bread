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
const sections = [
  { name: 'Started' },
  { name: 'Setup' },
  { name: 'Developing' },
  { name: 'Storybook' },
];

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'Contribute to component library'} />
        <PageTitle>Contributing to Library</PageTitle>
        <ComponentSubtitle
          description={
            'All contributions are welcome, please follow the guide below to get started'
          }
        />
        <SideScrollMenu items={sections} />
        <Section
          name="Getting Started"
          id="started"
          href="/contributing/library#tarted"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                <div style={{ marginTop: 8, marginBottom: 8 }}>
                  This project uses{' '}
                  <Link href="https://storybook.js.org/">Storybook</Link> as
                  it's development environment for both React Native and the
                  web. Storybook has it's own simple webserver to run the web
                  components, but the project uses a bare React Native app to
                  run it's components and the Storybook environment.
                </div>
                The main project folders are as follows:
                <DataTable
                  style={{ marginTop: 8, marginBottom: 8, maxWidth: 400 }}>
                  <DataTableRow style={{ backgroundColor: 'rgba(0,0,0,.12)' }}>
                    <DataTableCell text={'folder'} type={'header'} />
                    <DataTableCell text={'description'} type={'header'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'.storybook'} />
                    <DataTableCell text={'storybook config'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'docs'} />
                    <DataTableCell text={'documentation site '} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'public'} />
                    <DataTableCell text={'storybook web files'} />
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell text={'src'} />
                    <DataTableCell text={'component library'} />
                  </DataTableRow>
                </DataTable>
                Essentially the project files are in the{' '}
                <CodeInline code="root" type={'value'} /> of the folder, and all
                documtation files live in the{' '}
                <CodeInline code="docs" type={'value'} /> folder.
              </div>
            }
          />
        </Section>

        <Section
          name="Setup"
          id="setup"
          href="/contributing/library#setup"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                You can follow the{' '}
                <Link href="https://facebook.github.io/react-native/docs/getting-started">
                  React Native Docs
                </Link>{' '}
                to get React Native installed if you need to. Once you have
                React Native set up, follow these steps to get the project set
                up:
                <ol>
                  <li>Fork material-bread repo on github</li>
                  <li>
                    Clone the fork to your machine{' '}
                    <CodeInline
                      code="git clone git@github.com:copypearce/material-bread.git"
                      type={''}
                    />
                  </li>
                  <li>
                    Cd into project{' '}
                    <CodeInline code="cd material-bread" type={''} />
                  </li>
                  <li>
                    Install dependencies by running{' '}
                    <CodeInline code="npm i" type={''} /> or{' '}
                    <CodeInline code="yarn" type={''} />
                  </li>
                  <li>
                    Start up react native app by running{' '}
                    <CodeInline
                      code="react-native
                run-ios"
                      type={''}
                    />{' '}
                    or{' '}
                    <CodeInline
                      code="react-native
                run-android"
                      type={''}
                    />
                  </li>
                  <li>
                    Start up web project by openning a new terminal tab and
                    running
                    <CodeInline code="npm run storybook-web" type={''} />
                  </li>
                </ol>
                The app should be running on whichever simulator you set up, and
                the web app should be available at{' '}
                <CodeInline code="localhost:9009" type={''} />.
              </div>
            }
          />
        </Section>

        <Section
          name="Developing"
          id="developing"
          href="/contributing/library#developing"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                <div>
                  Components all live in{' '}
                  <CodeInline code="src/Components" type={'file'} />, and
                  they're displayed in the dev environment in a corresponding
                  file{' '}
                  <CodeInline
                    code="src/storybook/stories/index"
                    type={'file'}
                  />
                  .
                </div>
                Use the following steps to create a new component:
                <ol>
                  <li>
                    Create a basic component folder and file in{' '}
                    <CodeInline
                      code="src/Components/ComponentName"
                      type={'file'}
                    />{' '}
                    named
                    <CodeInline code="ComponentName.js" type={'file'} />.
                  </li>
                  <li>
                    Import <CodeInline code="withTheme" type={'element'} />
                    and Wrap component in the HOC theme component as such
                    <CodeInline
                      code="export default withTheme(ComponentName);"
                      type={'value'}
                    />
                  </li>
                  <li>
                    Add component to{' '}
                    <CodeInline code="src/index.js" type={'file'} />
                    as such{' '}
                    <CodeInline
                      code="export { default as ComponentName } from './Components/ComponentName/ComponentName'"
                      type={'value'}
                    />
                    .
                  </li>
                  <li>
                    Create component file in{' '}
                    <CodeInline
                      code="src/Components/ComponentName.stroies.js"
                      type={'file'}
                    />{' '}
                    as shown in the other files
                  </li>
                  <li>
                    Add component story to{' '}
                    <CodeInline
                      code="src/storybook/stories/index"
                      type={'file'}
                    />{' '}
                    as such{' '}
                    <CodeInline
                      code="export { default as ComponentName } from '../Components/ComponentName/ComponentName.stories.js'"
                      type={'value'}
                    />{' '}
                    .
                  </li>
                </ol>
                You should now see your component listed in your Storybook
                environment on the app or the web.
              </div>
            }
          />
        </Section>

        <Section
          name="Storybook Docs "
          id="storybook"
          href="/contributing/library#storybook"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                The storybook environment houses all of the components for
                development, but its also used in the docs to display more
                variations. This means the storybook stories you write will
                appear in the docs for users to play with. For more information
                about writing storybook stories, refer to{' '}
                <Link href="https://storybook.js.org/docs/basics/introduction/">
                  storybook documentation
                </Link>
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
