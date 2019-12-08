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

const depend = `{
    "name": "material-bread-next",
    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
    },
    "dependencies": {
        "babel-plugin-react-native-web": "^0.11.7",
        "material-bread": "^0.2.2",
        "next": "latest",
        "next-fonts": "^0.18.0",
        "next-transpile-modules": "^2.3.1",
        "react": "^16.7.0",
        "react-dom": "^16.7.0",
        "react-native-svg-web": "^1.0.1",
        "react-native-vector-icons": "^6.6.0",
        "react-native-web": "^0.11.6"
    }
}`;

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
        <Helmet title={'Get started with Material Bread and NextJS'} />
        <PageTitle>NextJS</PageTitle>
        <ComponentSubtitle
          description={'Server Rendered React and React Native'}
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
                The following guide is for setting up a minimal configuration
                for
                <Link
                  href="https://nextjs.org/learn/basics/getting-started"
                  style={{ margin: '0 4px', display: 'inline' }}>
                  {' '}
                  NextJS
                </Link>
                <span>
                  and Material Bread. Please see the example repo for the full
                  code.
                </span>
              </div>
            }
          />
          <div>
            <h3 style={styles.h3}>Package.json</h3>
            <ComponentDescription
              text={
                <div>
                  Init a new project with a{' '}
                  <CodeInline code="package.json" type="file" /> like below
                  <CodeBlock
                    code={depend}
                    style={styles.code}
                    fontSize={12}
                    canCopy
                    small
                  />{' '}
                  Then run
                  <CodeBlock
                    code={`npm i`}
                    style={styles.code}
                    fontSize={12}
                    canCopy
                    small
                  />
                </div>
              }
            />
          </div>
          <div style={styles.subSection}>
            <h3 style={styles.h3}>next.config.js</h3>
            <ComponentDescription
              text={
                <div>
                  Create the
                  <CodeInline code="next.config.js" type="file" /> to transpile
                  packages, alias react native, and handle fonts.
                </div>
              }
            />
            <CodeBlock code={alias} style={styles.code} canCopy />
            <ComponentDescription
              text={
                <div>
                  Also Create a file for the app name,{' '}
                  <CodeInline code="app.json" type="file" />
                </div>
              }
            />
            <CodeBlock code={appjson} style={styles.code} canCopy />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Next Document</h3>
            <ComponentDescription
              text={
                <div>
                  Create a <CodeInline code="pages/_document.js" type="file" />{' '}
                  file as follows to register the app, setup Roboto, setup
                  Material Icons, and finish setting up NextJs:
                </div>
              }
            />
            <CodeBlock code={documentNext} style={styles.code} canCopy />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Material Icons</h3>

            <ComponentDescription
              text={
                <div>
                  The font-face for Material Icons above references a local{' '}
                  <CodeInline code="MaterialIcons.ttf" type="file" /> file. We
                  can download this file from the
                  <Link
                    href="https://github.com/oblador/react-native-vector-icons/blob/master/Fonts/MaterialIcons.ttf"
                    style={{ margin: '0 4px', display: 'inline' }}>
                    {' '}
                    react-native-vector-icons repo
                  </Link>
                  . Add this file to a new{' '}
                  <CodeInline code="static" type="file" /> folder at the root.
                </div>
              }
            />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Create index.js</h3>
            <ComponentDescription
              text={
                <div>
                  You should now able to create your first page with Material
                  Bread components. Create{' '}
                  <CodeInline code="pages/index.js" type="file" /> as follows:
                </div>
              }
            />
            <CodeBlock code={indexjs} style={styles.code} canCopy />
          </div>
        </Section>

        <Section
          name="Usage"
          id="usage"
          href="/getting-started/react-native#usage">
          <ComponentDescription
            text={
              <div>
                Simply wrap your app or root in the{' '}
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
          href="/getting-started/react-native#examples">
          <ComponentDescription
            text={
              <div>
                If you're confused, check out these example repos with Material
                Bread set up, graciously provided by @fortezhuo
              </div>
            }
          />
          <div className="row">
            <Link
              href="https://github.com/fortezhuo/material-bread-next-example"
              style={{ fontSize: 18 }}>
              NextJS Example
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
