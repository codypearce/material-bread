import React, { Component } from 'react';

import Prism from 'prismjs';
import {
  CodeBlock,
  Section,
  Link,
  ComponentDescription,
  SideScrollMenu,
  PageTitle,
  ComponentSubtitle,
  CodeInline,
  Helmet,
} from '@components';

const sections = [
  { name: 'Install' },
  { name: 'Setup' },
  { name: 'Usage' },
  { name: 'Examples' },
];

const code = `import React, { Component } from "react";
import Root from "./Root";
import { BreadProvider } from "material-bread";

export default class App extends Component {
  render() {
    return (
      <BreadProvider>
        <Root />
      </BreadProvider>
    );
  }
}`;

const depend = `npm install react-native-macos-cli -g
react-native-macos init MyProject
cd MyProject
react-native-macos run-macos`;

const alias = `const withTM = require('next-transpile-modules')
const withFonts = require('next-fonts')
module.exports = withFonts(
  withTM({
    transpileModules: ['material-bread', 'react-native-svg', 'react-native-vector-icons'],
    webpack: config => {
      config.resolve.extensions = ['.web.js', '.js']
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
        'react-native-svg$': 'react-native-svg-web'
      }
      return config
    }
  })
)`;

const appjson = `{
    "name": "material-bread-next",
    "displayName": "material-bread-next"
}
`;

const documentNext = `import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { AppRegistry } from 'react-native'
import config from '../app.json'

const normalizeNextElements = \`
html,
body,
#__next {
  height: 100%;
  font-family: Roboto, sans-serif;
}
@import url("https://fonts.googleapis.com/css?family=Roboto");
@font-face {
  src: url(/static/MaterialIcons.ttf);
  font-family: MaterialIcons;
}  
\`

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(config.name, () => Main)
    const { getStyleElement } = AppRegistry.getApplication(config.name)
    const page = renderPage()

    const styles = [<style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />, getStyleElement()]
    return { ...page, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
`;

const indexjs = `import React, { Component } from "react";
import { View } from "react-native";
import { Fab } from "material-bread";

class App extends Component {
    render() {
        return (
            <View>
                <Fab />
            </View>
        );
    }
}

export default App;`;

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'Get started with Material Bread and Windows'} />
        <PageTitle>Windows</PageTitle>
        <ComponentSubtitle
          description={'Build Windows desktop applications using React Native.'}
        />

        <SideScrollMenu items={sections} />
        <Section
          name="Install"
          id="install"
          href="/getting-started/react-native#install">
          <div className="row">
            <CodeBlock
              code={'npm i material-bread'}
              style={styles.code}
              fontSize={12}
              canCopy
              small
            />
          </div>
          <div className="row">or</div>
          <div className="row">
            <CodeBlock
              code={'yarn add material-bread'}
              style={styles.code}
              fontSize={12}
              canCopy
              small
            />
          </div>
        </Section>
        <Section name="Setup" id="setup" href="/getting-started/web#setup ">
          <ComponentDescription
            text={
              <div>
                React Naitve Windows has a particular
                <Link
                  href="https://github.com/microsoft/react-native-windows#system-requirements"
                  style={{ margin: '0 4px', display: 'inline' }}>
                  {' '}
                  set of requirements
                </Link>
                <span>
                  and currently only supports up to `0.59.10` React Native.
                  Learn more about setting up React Native Windows
                  <Link
                    href="https://github.com/microsoft/react-native-windows/blob/master/current/docs/GettingStarted.md"
                    style={{ margin: '0 4px', display: 'inline' }}>
                    {' '}
                    with their getting started guide.
                  </Link>
                  . Alternatively, you can generate a new project with React
                  Native Windows and Material using the{' '}
                  <Link
                    href="https://github.com/codypearce/react-native-infinity"
                    style={{ margin: '0 4px', display: 'inline' }}>
                    {' '}
                    react-native-infinty cli
                  </Link>{' '}
                </span>
              </div>
            }
          />
          <div>
            <h3 style={styles.h3}>Init a project</h3>
            <ComponentDescription
              text={
                <div>
                  After following the above getting started guide, simply run
                  <CodeBlock
                    code={`react-native run-windows`}
                    style={styles.code}
                    fontSize={12}
                    canCopy
                    small
                  />{' '}
                  to set up the remaining configuration.
                </div>
              }
            />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Dependencies</h3>
            <ComponentDescription
              text={
                <div>
                  Next, simply install and link {'  '}
                  <Link href="https://github.com/oblador/react-native-vector-icons">
                    {' '}
                    react-native-vector-icons{' '}
                  </Link>{' '}
                  and{' '}
                  <Link href="https://github.com/react-native-community/react-native-svg">
                    {' '}
                    react-native-svg{' '}
                  </Link>
                  .
                </div>
              }
            />
          </div>
        </Section>

        <Section
          name="Usage"
          id="usage"
          href="/getting-started/react-native#usage">
          <ComponentDescription
            text={
              <div>
                Wrap your app or root in the{' '}
                <CodeInline code="BreadProvider" type="element" /> and start
                developing. You can learn about customizing on the
                <Link href="/style/theme"> theme page</Link>.
              </div>
            }
          />
          <CodeBlock code={code} canCopy />
        </Section>
        <Section
          name="Examples"
          id="examples"
          href="/getting-started/windows#examples">
          <ComponentDescription
            text={
              <div>
                If you're confused, check out this example repos with Material
                Bread set up. Alternatively, you can use the{' '}
                <Link
                  href="https://github.com/codypearce/react-native-infinity"
                  style={{ margin: '0 4px', display: 'inline' }}>
                  {' '}
                  react-native-infinty cli
                </Link>{' '}
                to generate a project with Material Bread already setup.
              </div>
            }
          />
          <div className="row">
            <Link
              href="https://github.com/codypearce/material-bread-windows-example"
              style={{ fontSize: 18 }}>
              Windows Example
            </Link>
          </div>
        </Section>
      </div>
    );
  }
}

const styles = {
  container: { marginBottom: 60 },
  code: {},
  subSection: { marginTop: 60 },
};

export default Index;
