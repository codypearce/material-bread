import React, { Component } from 'react';

import Prism from 'prismjs';
import {
  PageTitle,
  ComponentSubtitle,
  Section,
  ComponentDescription,
  Helmet,
} from '@components';

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <Helmet title={'About'} />
        <PageTitle>About</PageTitle>
        <ComponentSubtitle
          description={
            'This is a React Native Material Component Library that aims to provide useful components across various platforms.'
          }
        />
        <h2>Goals</h2>

        <Section
          name="All Components"
          id="all-components"
          href="/about#all-components"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                The main goal of this package is to provide all components found
                in the Material Docs. This includes all variations within
                reason. The idea is that a developer could recreate whatever is
                seen in the docs.
              </div>
            }
          />
        </Section>

        <Section
          name="Cross Platform"
          id="cross-platform"
          href="/about#cross-platform"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                The goal is for all components to work cross platofrm on iOS,
                Android, Web, and Electron.
              </div>
            }
          />
        </Section>

        <Section
          name="Highly Customizable"
          id="highly-customizable"
          href="/about#highly-customizable"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                Having almost complete control over the styling of every
                component is an important feature of UI libraries for the
                following reasons:
                <ol>
                  <li>
                    There will always be something that needs to be slightly
                    changed or different. Packages that make it difficult to
                    customize quickly become more of a burden then a useful
                    tool.
                  </li>
                  <li>
                    Having more control over the component allows the developer
                    to possibly fix edge cases or issues themselves rather than
                    wait for a new release of the package.
                  </li>
                  <li>
                    More customization allows developers to build their own
                    components on top package components.{' '}
                  </li>
                </ol>
                React Native provides a unique challenge for customization since
                you cannot select any element you want with CSS and override all
                the styles.
              </div>
            }
          />
        </Section>

        <Section
          name="Copious Demos "
          id="copious-demos"
          href="/about#copious-demos"
          style={{ marginTop: 0 }}>
          <ComponentDescription
            text={
              <div>
                Demos make learning how to use components and how to build
                common patterns much easier. Since this library is dedicated to
                providing Material Design components, it is important to provide
                as many demos as needed to illustrate how one can create all
                variations with this library.
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
