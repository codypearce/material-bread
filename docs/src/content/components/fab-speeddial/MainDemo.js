import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo } from '@components';
import { FabSpeedDial } from '../../../../../src/index';

export const code = `class FabPage extends React.Component {
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

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      'Fab Speed Dials accept an array of actions that will animate out from the main Fab.'
    }
    code={code}
    scope={{ View, FabSpeedDial, Image }}
  />
);
export default MainDemo;
