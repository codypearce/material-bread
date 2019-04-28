import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { Dialog, Button } from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    visible: false,
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', }}>    
        <Button text={'Open'} onPress={() => this.setState({ visible: !this.state.visible })} />
        <Dialog
            visible={this.state.visible}
            onTouchOutside={() => this.setState({ visible: false })}
            supportingText={'Discard draft?'}
            style={{width: 280}}
            actionItems={[
            {
                text: 'Cancel',
                onPress: () =>  this.setState({ visible: false }),
            },
            {
                text: 'OK',
                onPress: () =>  this.setState({ visible: false }),
            },
            ]}
        /> 
      </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Alert'}
    sectionHref={`${pageHref}#alert`}
    sectionId={'alert'}
    code={code}
    scope={{ View, Dialog, Button, Text }}
  />
);
export default SubtitleDemo;
