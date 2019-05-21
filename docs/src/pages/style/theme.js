import React, { Component } from 'react';

import { defaultTheme } from '../../../../src/index';

import {
  CodeInline,
  Section,
  PageTitle,
  CodeBlock,
  P,
  Helmet,
} from '@components';

const themeCode = `import * as React from 'react';
import { BreadProvider, Colors } from 'material-bread';
import App from './App';

const theme = {
    palette: {
        primary: Colors.pink['500'],
        secondary: Colors.blue['600'],
        error: Colors.red['300'],
    }
};

export default function Root() {
  return (
    <BreadProvider value={theme}>
      <App />
    </BreadProvider>
  );
}`;

const withThemeCode = `import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'material-bread';

function AppButton(props) {
  const { theme } = props;

  return (
    <View style={{backgroundColor: theme.primary.main }}>Click Me</View>
  )
}

export default withTheme(AppButton);`;

export default class IconPage extends Component {
  render() {
    return (
      <div>
        <Helmet title={'Material Theme'} />
        <PageTitle>Theme</PageTitle>
        <P>
          The theme defines both global and component specific styles for color,
          spacings, sizings, shadows, fonts, and more. You can customize as much
          or as little as you want.
        </P>
        <Section name="Customizing" href="/style/theme#custom" id="custom">
          <div
            style={{
              marginBottom: 16,
            }}>
            <P> To apply a global custom theme:</P>
            <ol>
              <li>
                <P style={{ margin: 0 }}>
                  To apply a global custom theme:Wrap your app with the{' '}
                  <CodeInline code={'BreadProvider'} type={'element'} />{' '}
                  component
                </P>
              </li>
              <li>
                <P style={{ margin: 0 }}>
                  Pass in a custom <CodeInline code={'theme'} /> object.
                </P>
              </li>
            </ol>
            <P>This will merge your custom changes with the default theme.</P>
          </div>
          <CodeBlock code={themeCode} canCopy />
        </Section>
        <Section
          name="Apply theme to User Components"
          href="/style/theme#withTheme"
          id="withTheme">
          <P
            style={{
              marginBottom: 16,
            }}>
            Using the <CodeInline code={'withTheme'} /> utility function, you
            can use the app theme in your own components.
          </P>
          <CodeBlock code={withThemeCode} canCopy small />
        </Section>
        <Section name="Default Theme" href="/style/theme#default" id="default">
          <P
            style={{
              marginBottom: 16,
            }}>
            Below is the full default theme. You can override any value by
            either passing in theme object with that key specified, or directly
            in components by changing that property with the style prop.
          </P>
          <CodeBlock
            code={JSON.stringify(defaultTheme, null, 2)}
            canCopy
            small
          />
        </Section>
      </div>
    );
  }
}
