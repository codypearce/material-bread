import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { Ripple, Card } from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Ripple
                rippleColor={'blue'}
                rippleCentered
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
            <Ripple
                rippleCentered
                style={{ width: 200, height: 200, marginLeft: 40 }}>
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
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Centered'}
    sectionHref={`${pageHref}#centered`}
    sectionId={'centered'}
    code={code}
    description={
      'This forces the ripple to start in the center no matter where you click'
    }
    scope={{ View, Ripple, Card, Text }}
  />
);
export default SubtitleDemo;
