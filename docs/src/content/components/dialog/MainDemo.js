import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Button, Dialog } from '../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <View>
        <Button text={'Open'} onPress={() => this.setState({ visible: !this.state.visible })} />
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => this.setState({ visible: false })}
          title={'Use Googles location service?'}
          supportingText={
            'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
          }
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
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        Dialogs are rendered with{' '}
        <CodeInline code="modal-react-native-web" type="" /> package. This
        mimics the default modal found in{' '}
        <CodeInline code="react-native" type="" />. Passing in{' '}
        <CodeInline code="title" type="prop" />,{' '}
        <CodeInline code="supportingText" type="prop" />,{' '}
        <CodeInline code="actionItems" type="prop" />, will create a standard
        dialog. You can also insert whatever you want inbetween{' '}
        <CodeInline code="supportingText" type="prop" />
        and <CodeInline code="actionItems" type="prop" /> by passing in{' '}
        <CodeInline code="children" type="prop" />
      </div>
    }
    code={code}
    scope={{
      View,
      Button,
      Dialog,
      Image,
    }}
  />
);
export default MainDemo;
