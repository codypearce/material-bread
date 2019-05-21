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

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'Get started on React Native'} />
        <PageTitle>React Native</PageTitle>
        <ComponentSubtitle
          description={'Build native mobile apps using JavaScript and React'}
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
        <Section
          name="Setup"
          id="setup"
          href="/getting-started/react-native#setup ">
          <ComponentDescription
            text={
              <div>
                If you're using Expo then you're all set to start using
                components. If you're using native then you need to install and
                link {'  '}
                <Link href="https://github.com/oblador/react-native-vector-icons">
                  {' '}
                  react-native-vector-icons{' '}
                </Link>
                .
              </div>
            }
          />
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
                Bread set up
              </div>
            }
          />
          <div className="row">
            <Link
              href="https://github.com/codypearce/material-bread-rn-example"
              style={{ fontSize: 18 }}>
              React Native Example
            </Link>
            <div style={{ fontSize: 18, marginRight: 16, marginLeft: 16 }}>
              -
            </div>
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
