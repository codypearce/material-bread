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

const dependencies = `npm i material-bread electron react react-dom react-native-web @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-flow-strip-types @babel/plugin-transform-regenerator @babel/plugin-transform-runtime css-loader file-loader style-loader webpack webpack-cli webpack-dev-server
`;

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

const html = `<!DOCTYPE html>
<html>
  <head>
    <title>Material Bread Electron</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <div id="app"></div>
    <script
      type="text/javascript"
      src="http://localhost:7000/bundle.js"
    ></script>
  </body>
</html>
`;

const mainJs = `const { app, BrowserWindow } = require("electron");

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    minWidth: 500,
    height: 620,
    minHeight: 500,
    center: true,
    show: false
  });
  win.loadURL(\`file://${__dirname}/index.html\`);

  win.on("closed", () => {
    win = null;
  });
  win.once("ready-to-show", () => {
    win.show();
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
`;

const rendererJs = `import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

const root = document.getElementById("app");

const renderApp = () => {
  const App = require("./App").default;
  if (root) render(<App />, root);
};

renderApp();

if (module && module.hot != null && typeof module.hot.accept === "function") {
  module.hot.accept(["./App"], () =>
    setImmediate(() => {
      unmountComponentAtNode(root);
      renderApp();
    })
  );
}`;

const webpack = `const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, "src", "renderer.js")
  },
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
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
              "@babel/plugin-transform-regenerator"
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader?limit=100000"
      }
    ]
  },
  resolve: {
    alias: {
      "react-native": "react-native-web"
    }
  },
  output: {
    filename: "bundle.js"
  },
  target: "electron-renderer",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 7000
  }
};`;

const appjs = `import React, { Component } from "react";
import { View } from "react-native";
import { Fab } from "material-bread";

const materialFont = new FontFace(
  "MaterialIcons",
  "url(../node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf)"
);
document.fonts.add(materialFont);

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

const scripts = `"server": "webpack-dev-server --config ./webpack.config.js",
"electron": "electron ./src/main.js",
`;

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'React Native Electron'} />
        <PageTitle>Electron</PageTitle>
        <ComponentSubtitle
          description={
            'Build cross platform desktop apps with JavaScript, HTML, and CSS'
          }
        />

        <SideScrollMenu items={sections} />
        <Section
          name="Install"
          id="install"
          href="/getting-started/electron#install">
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
        <Section
          name="Setup"
          id="setup"
          href="/getting-started/electron#setup ">
          <ComponentDescription
            text={
              <div>
                There are essentially three steps involved in getting Material
                Bread working on Electron.
                <ol>
                  <li>Set up React on Electron</li>
                  <li>Set up React-Web on Electron</li>
                  <li>Set up Material Bread and vector icons</li>
                </ol>
                The quickest and easiest way to get started is to check out the
                example repo linked below. If you're familiar with setting up
                <CodeInline code="react" type="" /> and{' '}
                <CodeInline code="react-native-web" type="" /> with electron
                then you can skip to the section about webpack config and{' '}
                <CodeInline code="app.js" type="file" />.
              </div>
            }
          />
          <div style={styles.subSection}>
            <h3 style={styles.h3}>Install dependencies</h3>
            <ComponentDescription
              text={
                <div>
                  This includes <CodeInline code="react" type="" />,{' '}
                  <CodeInline code="react-native" type="" />
                  , <CodeInline code="react-native-web" type="" />,{' '}
                  <CodeInline code="electron" type="" />, required babel
                  plugins, and webpack loaders.
                </div>
              }
            />
            <CodeBlock
              code={dependencies}
              style={styles.code}
              canCopy
              small
              fontSize={12}
            />
          </div>
          <div style={styles.subSection}>
            <h3 style={styles.h3}>HTML entry</h3>
            <ComponentDescription
              text={
                <div>
                  Create a src folder with{' '}
                  <CodeInline code="index.html" type="file" /> to act as an
                  entry
                </div>
              }
            />
            <CodeBlock code={html} style={styles.code} canCopy />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Create main.js</h3>
            <ComponentDescription
              text={
                <div>
                  Create a <CodeInline code="main.js" type="file" /> file in src
                  that will create a window and load the{' '}
                  <CodeInline code="index.html" type="file" />
                  file.
                </div>
              }
            />
            <CodeBlock code={mainJs} style={styles.code} canCopy />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Create renderer.js</h3>
            <ComponentDescription
              text={
                <div>
                  Create a <CodeInline code="renderer.js" type="file" /> file in
                  src that will load react into the html file with hot
                  reloading.
                </div>
              }
            />
            <CodeBlock code={rendererJs} style={styles.code} canCopy />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Create webpack.config.js</h3>
            <ComponentDescription
              text={
                <div>
                  Create a <CodeInline code="webpack.config.js" type="file" />{' '}
                  file in the root of the project that will handle babel
                  plugins, loaders, electron-renderer, output our bundle, and
                  alias react-native.
                </div>
              }
            />
            <CodeBlock code={webpack} style={styles.code} canCopy />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Create App.js and add Icons</h3>
            <ComponentDescription
              text={
                <div>
                  Create <CodeInline code="App.js " type="file" />
                  component in src. Add the FontFace function below to add the
                  material icons to the package.
                </div>
              }
            />
            <CodeBlock code={appjs} style={styles.code} canCopy />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Add scipts</h3>
            <ComponentDescription
              text={
                <div>
                  Add webpack server script and electron server to{' '}
                  <CodeInline code="package.json" type="file" />.
                </div>
              }
            />
            <CodeBlock code={scripts} style={styles.code} canCopy />
          </div>

          <div style={styles.subSection}>
            <h3 style={styles.h3}>Finish</h3>
            <ComponentDescription
              text={
                <div>
                  Finally open up two console tabs, run{' '}
                  <CodeInline code="npm run server" type="" />
                  in one and <CodeInline code="npm run electron" type="" /> in
                  the other. You should now see your app running with Material
                  Bread components. Keep in mind this a very minimal setup,
                  there are plenty of other great guides setting up{' '}
                  <CodeInline code="react" type="" /> and
                  <CodeInline code="react-native" type="" /> with{' '}
                  <CodeInline code="electron" type="" />.
                </div>
              }
            />
          </div>
        </Section>
        <Section name="Usage" id="usage" href="/getting-started/electron#usage">
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
          href="/getting-started/electron#examples">
          <ComponentDescription
            text={
              <div>
                For a quick start with minimal set up with{' '}
                <CodeInline code="react-native-web" type="" />,
                <CodeInline code="electron" type="" />, and{' '}
                <CodeInline code="materal-bread" type="" />, checkout the
                example below
              </div>
            }
          />
          <div className="row">
            <Link
              href="https://github.com/codypearce/material-bread-electron-example"
              style={{ fontSize: 18 }}>
              Minimal React Native Electron Example
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
