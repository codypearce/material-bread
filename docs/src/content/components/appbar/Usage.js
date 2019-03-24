import React from 'react';
import { ComponentUsage, CodeInline, Link } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Appbar } from 'material-bread';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Appbar title={'Page Title'} />
      <View>
    );
  }
}`;

const Usage = pageHref => (
  <ComponentUsage
    pageHref={pageHref}
    description={
      <div>
        Usage depends entirely on what kind of navigation you are using in your
        app. For example, in <CodeInline code="react-navigation" /> you can
        replace the entire header with a{' '}
        <Link href="  https://hackernoon.com/how-to-use-a-custom-header-and-custom-bottom-tab-bar-for-react-native-with-react-navigation-969a5d3cabb1">
          custom appbar
        </Link>
        .
      </div>
    }
    code={code}
  />
);
export default Usage;
