import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'material-bread';

export default class Actions extends Component {
  render() {
    return (
        <View >
            <Button text="Cancel" type={'text'}  onPress={() => console('onCancel')}  />
            <Button text="Accept" type={'contained'} onPress={() => console('onAccept')} />
        </Badge>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
