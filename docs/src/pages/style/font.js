import React, { Component } from 'react';

import { CodeBlock, Section, PageTitle, Link, P, Helmet } from '@components';

export default class FontPage extends Component {
  render() {
    return (
      <div>
        <Helmet title={'Material Font Roboto'} />
        <PageTitle>Font</PageTitle>
        <P>
          The default font for Material Design and this package is Roboto,
          however you can use any font you want. To use Roboto you must include
          it in your project in addition to this package. The process to add a
          font is different depending on what platform you are targeting.
        </P>

        <Section
          name="React Native"
          href="/style/font#react-native"
          id="react-native">
          <div>
            <P> To install Roboto for both platforms:</P>

            <ol>
              <li>
                <P style={{ margin: 0 }}>
                  Download Roboto from{' '}
                  <Link href="https://fonts.google.com/specimen/Roboto">
                    Google Fonts
                  </Link>
                </P>
              </li>
              <li>
                <P style={{ margin: 0 }}>
                  Follow the steps provided here to add fonts to React Native
                  for both{' '}
                  <Link href="https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e">
                    iOS and Android
                  </Link>
                </P>
              </li>
            </ol>
          </div>
        </Section>
        <Section name="Web" href="/style/font#web" id="web">
          <P>
            There are many ways to install fonts in web projects, the quickest
            way is to use the Google Fonts CDN.
          </P>
          <CodeBlock
            code={`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>`}
            canCopy
            small
          />
        </Section>
      </div>
    );
  }
}
