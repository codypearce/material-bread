import React from 'react';
import { ComponentUsage, CodeInline, Link } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { AppbarBottom, Fab } from 'material-bread';

export default class Page extends Component {
  render() {
    return (
      <View style={{position: 'relative'}}>
        <AppbarBottom 
            fab={<Fab />}
            fabPosition={'center'} 
            fabCutout
            navigation={'menu'}
            actionItems={[
                {name: 'search', onPress: () => console.log('onSearch')},
                {name: 'more-vert'},
            ]}
            style={{position: 'absolute', bottom: 0}}
        />
      <View>
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
