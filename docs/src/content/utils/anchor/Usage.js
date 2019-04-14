import React from 'react';
import { ComponentUsage, CodeInline } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Anchor, BaseText } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Anchor url={'https://www.pbs.org/'} target={'_blank'}>
          <Heading style={{ color: 'blue' }}>PBS</Heading>
        </Anchor>
      </View>
    );
  }
}`;

const Usage = pageHref => (
  <ComponentUsage
    pageHref={pageHref}
    description={
      <div>
        Simply wrap your component in the{' '}
        <CodeInline code="Anchor" type="element" /> component and provide a url
        to link to.
      </div>
    }
    code={code}
  />
);
export default Usage;
