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

const code = `
import React, { Component } from "react";
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

const alias = ` resolve: {
  alias: {
    "react-native": "react-native-web"
  },
  extensions: [".web.js", ".js"]
},`;

const cssFont = ` @font-face {
  src: url(../../node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf);
  font-family: MaterialIcons;
}`;

const appJs = `import React, { Component } from "react";
import "./styles/global.css";

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
`;

const tffLoader = ` rules: [
  {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: "url-loader?limit=100000"
  }
]`;

const webpack = `rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules\/(?!(material-bread|react-native-vector-icons)\/).*/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-transform-flow-strip-types",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-transform-runtime",
          ]
        }
      }
},`;

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'React Native web starter'} />
        <PageTitle>Web</PageTitle>
        <ComponentSubtitle
          description={'Run React Native components on the web'}
        />
        <SideScrollMenu items={sections} />
        <Section
          name="Install"
          id="install"
          href="/getting-started/web#install">
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
                  href="https://github.com/necolas/react-native-web"
                  style={{ margin: '0 4px', display: 'inline' }}>
                  {' '}
                  react-native-web
                </Link>
                <span>
                  and Material Bread. Please see the example repo for the full
                  code.
                </span>
              </div>
            }
          />
          <div>
            <h3 style={styles.h3}>React Native Web</h3>
            <ComponentDescription
              text={
                <div>
                  First{' '}
                  <CodeBlock
                    code={'npm i react-native-web react-dom react-art'}
                    style={styles.code}
                    fontSize={12}
                    canCopy
                    small
                  />{' '}
                  then set up webpack to alias{' '}
                  <CodeInline code="react-native" type="" />
                </div>
              }
            />
            <CodeBlock code={alias} style={styles.code} canCopy />
          </div>
          <div style={styles.subSection}>
            <h3 style={styles.h3}>Install Material Icons as font</h3>
            <ComponentDescription
              text={
                <div>
                  Material Icons need to be installed as a font, first add the
                  font to a css file called{' '}
                  <CodeInline code="global.css" type="file" />
                </div>
              }
            />
            <CodeBlock code={cssFont} style={styles.code} canCopy />
            <ComponentDescription
              text={
                <div>
                  Then include it in your{' '}
                  <CodeInline code="App" type="element" /> component or include
                  it as a link in <CodeInline code="index.html" type="file" />
                </div>
              }
            />
            <CodeBlock code={appJs} style={styles.code} canCopy />
          </div>
          <div style={styles.subSection}>
            <h3 style={styles.h3}>TFF Loader</h3>
            <ComponentDescription
              text={
                <div>You'll also need to add a TFF loader to load the font</div>
              }
            />
            <CodeBlock code={tffLoader} style={styles.code} canCopy />
          </div>
          <div style={styles.subSection}>
            <h3 style={styles.h3}>Babel Loader</h3>
            <ComponentDescription
              text={
                <div>
                  Finally you'll need to exclude both Material Bread and
                  <CodeInline code="react-native-vector-icons" type="" />, as
                  well as add a few babel packages.
                </div>
              }
            />
            <CodeBlock code={webpack} style={styles.code} canCopy />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Finish</h3>
            <ComponentDescription
              text={
                <div>
                  You should now be able to add Material Bread components. If
                  you're stuck please checkout the example repo below
                </div>
              }
            />
          </div>
        </Section>
        <Section name="Usage" id="usage" href="/getting-started/web#usage">
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
          href="/getting-started/web#examples">
          <ComponentDescription
            text={
              <div>
                For a quick start with minimal set up with{' '}
                <CodeInline code="react-native-web" type="" /> and{' '}
                <CodeInline code="materal-bread" type="" />, checkout the
                example below
              </div>
            }
          />
          <div className="row">
            <Link
              href="https://github.com/codypearce/material-bread-react-example"
              style={{ fontSize: 18 }}>
              Minimal React Example
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
  h3: {
    fontWeight: 400,
    marginBottom: 8,
  },
  subSection: {
    marginTop: 40,
  },
};

export default Index;
