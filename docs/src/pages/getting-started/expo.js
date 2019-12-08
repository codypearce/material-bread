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

const expoCode = `npm install expo-cli --global
expo init my-new-project
cd my-new-project
expo start`;

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

const fontCode = `@font-face {
    src: url(./MaterialIcons.ttf);
    font-family: MaterialIcons;
}
`;

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'Get started with Expo and Material Bread'} />
        <PageTitle>Expo</PageTitle>
        <ComponentSubtitle
          description={'Build mobile apps using React and React Native'}
        />

        <SideScrollMenu items={sections} />
        <Section
          name="Install"
          id="install"
          href="/getting-started/expo#install">
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
        <Section name="Setup" id="setup" href="/getting-started/expo#setup ">
          <div>
            <h3 style={styles.h3}>Install Expo</h3>
            <ComponentDescription
              text={
                <div>
                  Follow the instructions on Expo's
                  <Link href="https://expo.io/learn"> Get Started</Link> guide
                  to make sure you have everything installed. Or run the
                  following
                  <CodeBlock code={expoCode} canCopy />
                </div>
              }
            />
          </div>
          <div>
            <h3 style={styles.h3}>Dependencies</h3>
            <ComponentDescription
              text={
                <div>
                  Expo already has{' '}
                  <CodeInline code="react-native-vector-icons" type="" /> setup,
                  so we only need to install
                  <Link href="https://github.com/react-native-community/react-native-svg">
                    {' '}
                    react-native-svg{' '}
                  </Link>
                  , and we're ready to start adding components.
                </div>
              }
            />
          </div>

          <div>
            <h3 style={styles.h3}>Expo Web</h3>
            <ComponentDescription
              text={
                <div>
                  Expo web should run fine, but we need to provide the
                  MaterialIcon font to the browser. First we need to generate
                  the <CodeInline code="index.html" type="file" /> to insert the
                  font in the head. Run the following and select{' '}
                  <CodeInline code="index.html" type="file" />:
                  <CodeBlock code={`expo customize:web`} canCopy />
                  <div style={{ marginTop: 16 }}>
                    Next we need to download the font file,
                    <CodeInline code="MaterialIcons.ttf" type="file" />, go to
                    <Link
                      href="https://github.com/oblador/react-native-vector-icons/blob/master/Fonts/MaterialIcons.ttf"
                      style={{ margin: '0 4px', display: 'inline' }}>
                      {' '}
                      react-native-vector-icons repo
                    </Link>
                    to download it. Add this file to a new{' '}
                    <CodeInline code="web" type="file" /> folder at the root.
                  </div>
                  <div style={{ marginTop: 16 }}>
                    Finally, go to the{' '}
                    <CodeInline code="index.html" type="file" /> and add the
                    following to the bottom of the{' '}
                    <CodeInline code="<style>" type="element" /> element.
                    <CodeBlock code={fontCode} canCopy />
                  </div>
                  <div style={{ marginTop: 16 }}>
                    Now you can run the following and start adding components
                    with icons
                    <CodeBlock code={`expo start -w`} canCopy />
                  </div>
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
                If you're confused, check out thes example repo with Material
                Bread set up
              </div>
            }
          />
          <div className="row">
            <Link
              href="https://github.com/codypearce/material-bread-expo-example"
              style={{ fontSize: 18 }}>
              Expo Example
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
};

export default Index;
