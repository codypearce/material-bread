import React from 'react';
import { View, Text } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Ripple, Card } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Ripple
          rippleColor={'blue'}
          style={{
            width: 180,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          <Text>Click Me</Text>
        </Ripple>
        <Ripple style={{ width: 200, height: 200, marginLeft: 40 }}>
          <Card
            shadow={4}
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Click Me</Text>
          </Card>
        </Ripple>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="Ripple" type="element" /> is a base component that can
        be used to add a ripple animation to anything on touch. You can change{' '}
        <CodeInline code="rippleDuration" type="prop" />,{' '}
        <CodeInline code="rippleColor" type="prop" />,{' '}
        <CodeInline code="rippleContainerBorderRadius" type="prop" />, and much
        more.
      </div>
    }
    code={code}
    scope={{ View, Text, Ripple, Card }}
  />
);
export default MainDemo;
