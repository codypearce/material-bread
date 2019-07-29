import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React from 'react';
import { View, Text } from 'react-native';
import { SwipeNav, Appbar, Button } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <SwipeNav
          header={
            <Appbar
              barType={'normal'}
              color={'#009688'}
              navigation={'menu'}
              title={'News'}
              actionItems={[{ name: 'more-vert' }]}
            />
          }>
          <View>
            <Text>Content</Text>
          </View>
        </SwipeNav>
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
