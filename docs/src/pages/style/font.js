import React, { Component } from 'react';
import Section from '../../components/Section';
import PageTitle from '../../components/PageTitle';
import CodeBlock from '../../components/CodeBlock';

export default class FontPage extends Component {
  render() {
    return (
      <div>
        <PageTitle>Font</PageTitle>
        <p
          style={{
            color: 'rgba(0, 0, 0, 0.67)',
            marginTop: 16,
            lineHeight: 1.5,
          }}>
          The default font for Material Design and this package is Roboto,
          however you can use any font you want. To use Roboto you must include
          it in your project in addition to this package. The process to add a
          font is different depending on what platform you are targeting.
        </p>
        <Section
          name="React Native"
          href="/components/font#react-native"
          id="react-native">
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.67)',
              marginTop: 16,
              lineHeight: 1.5,
            }}>
            To install Roboto for both platforms:
            <ol>
              <li>
                Download Roboto from{' '}
                <a href="https://fonts.google.com/specimen/Roboto">
                  Google Fonts
                </a>
              </li>
              <li>
                Follow the steps provided here to add fonts to React Native for
                both{' '}
                <a href="https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e">
                  iOS and Android
                </a>
              </li>
            </ol>
          </p>
        </Section>
        <Section name="Web" href="/components/font#web" id="web">
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.67)',
              marginTop: 16,
              lineHeight: 1.5,
            }}>
            There are many ways to install fonts in web projects, the quickest
            way is to use the Google Fonts CDN.
            <CodeBlock
              code={`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>`}
              canCopy
              small
            />
          </p>
        </Section>
      </div>
    );
  }
}
