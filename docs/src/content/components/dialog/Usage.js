import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Dialog } from 'material-bread';

class DialogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <View>
        <Button onPress={() => store.set({ visible: !this.state.visible })}>
          Open
        </Button>
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
            <Button text={'OK'} onPress={() => store.set({ visible: false })}>
          </DialogActions>
        </Dialog>
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
