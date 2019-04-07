import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Fab } from '../../../../../src/index';

export const code = `class FabPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Fab />
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={`Fabs can have different icons, color, or inner content.`}
    code={code}
    scope={{ View, Fab }}
  />
);
export default MainDemo;
