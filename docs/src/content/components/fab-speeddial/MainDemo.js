import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Fab, FabSpeedDial } from '../../../../../src/index';

export const code = `class FabPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const actions = [
      <Fab backgroundColor={'#E91E63'} icon={'archive'} />,
      <Fab backgroundColor={'#F44336'} icon={'delete'} />,
      <Fab backgroundColor={'#009688'} icon={'edit'} />,
      <Fab backgroundColor={'black'} icon={'attach-money'} />,
    ];
    return (
      <View>
        <FabSpeedDial actions={actions} />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      'Fab Speed Dials accept an array of actions that will animate out from the main Fab.'
    }
    code={code}
    scope={{ View, FabSpeedDial, Fab, Image }}
  />
);
export default MainDemo;
