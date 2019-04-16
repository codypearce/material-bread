import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from '../../../../../src/index';

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
          onTouchOutside={() => this.setState({ visible: false })}>
          <DialogTitle>Use Googles location service?</DialogTitle>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
          <DialogActions>
            <Button text={'Cancel'} onPress={() => this.setState({ visible: false })} />
            <Button text={'OK'} onPress={() => this.setState({ visible: false })} />
          </DialogActions>
        </Dialog>
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
        <CodeInline code="react-native" type="" />
      </div>
    }
    code={code}
    scope={{
      View,
      Button,
      Dialog,
      DialogActions,
      DialogContentText,
      DialogTitle,
      Image,
    }}
  />
);
export default MainDemo;
