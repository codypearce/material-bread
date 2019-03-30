import React from 'react';
import { ComponentUsage, CodeInline, Link } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Avatar } from 'material-bread';

export default class UserAvatar extends Component {
  render() {
    return (
        <Avatar 
            type="icon"
            content="face"
            contentColor={'white'}
        />
    );
  }
}`;

const Usage = pageHref => (
  <ComponentUsage
    pageHref={pageHref}
    description={
      <div>
        {`Usage depends on what navigation package you're using.`} For
        <CodeInline code="react-navigation" /> you can follow their{' '}
        <Link href="https://reactnavigation.org/docs/en/tab-based-navigation.html">
          guide on TabNavigation
        </Link>
      </div>
    }
    code={code}
  />
);
export default Usage;
