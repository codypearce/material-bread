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

const sections = [{ name: 'Install' }, { name: 'Setup' }, { name: 'Examples' }];

const dependencies = `npm i react-native-svg react-native-vector-icons
react-native link react-native-svg
react-native link react-native-vector-icons
`;

const appVue = `<template>
    <app></app>
</template>

<script>
import Vue from "vue-native-core";
import { VueMaterialBread } from "material-bread";

import App from "./src/App.vue";
// registering all components to the global scope of the Vue
Vue.use(VueMaterialBread);

export default {
    components: { App }
};
</script>
`;

const indexVue = `
<template>
  <view :style="{marginTop: 80}">
    <mb-fab />
  </view>
</template>
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
        <Helmet title={'Get started with Vue native and Material Bread'} />
        <PageTitle>Vue Native</PageTitle>
        <ComponentSubtitle description={'Build mobile apps using Vue Native'} />

        <SideScrollMenu items={sections} />
        <Section
          name="Install"
          id="install"
          href="/getting-started/vue-native#install">
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
          href="/getting-started/vue-native#setup ">
          <div>
            <h3 style={styles.h3}>Install Vue Native</h3>
            <ComponentDescription
              text={
                <div>
                  Follow the instructions on Vue Native's
                  <Link href="https://vue-native.io/docs/installation.html">
                    Installation
                  </Link>{' '}
                  guide to make sure you have everything installed. Vue Native
                  can be set up with either Expo or React Native directly. Once
                  you've initialized a project, move onto the next step.
                </div>
              }
            />
          </div>
          <div>
            <h3 style={styles.h3}>Dependencies</h3>
            <ComponentDescription
              text={
                <div>
                  Install and link both
                  <Link href="https://github.com/oblador/react-native-vector-icons">
                    {' '}
                    react-native-vector-icons{' '}
                  </Link>
                  and
                  <Link href="https://github.com/react-native-community/react-native-svg">
                    {' '}
                    react-native-svg{' '}
                  </Link>
                  .
                  <CodeBlock code={dependencies} canCopy />
                </div>
              }
            />
          </div>

          <div>
            <h3 style={styles.h3}>Register Components</h3>
            <ComponentDescription
              text={
                <div>
                  Material Bread supports kebab-case components, we simply have
                  to register them with Vue Native to use them. Edit{' '}
                  <CodeInline code="App.vue" type="file" /> as follows
                  <CodeBlock code={appVue} canCopy />
                  <div style={{ marginTop: 16 }}>
                    Next, create the{' '}
                    <CodeInline code="src/App.vue" type="file" /> file and start
                    using ecomponents
                    <CodeBlock code={indexVue} canCopy />
                  </div>
                </div>
              }
            />
          </div>
        </Section>

        <Section
          name="Examples"
          id="examples"
          href="/getting-started/vue-native#examples">
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
              href="https://github.com/codypearce/material-bread-vue-native-example"
              style={{ fontSize: 18 }}>
              Vue Native Example
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
