import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { FabSpeedDial} from 'material-bread';

class FabPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const actions = [
      {
        text: 'Favorites',
      },
      {
        text: 'Language',
      },
      {
        text: 'Location',
      },
      {
        text: 'Video',
      },
    ];
    return (
      <View>
        <FabSpeedDial actions={actions} />
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
