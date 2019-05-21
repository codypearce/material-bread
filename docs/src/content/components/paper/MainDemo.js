import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Paper } from '../../../../../src/index';

export const code = `class PaperDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
        <Paper
            style={{
              height: 100,
              width: 100,
              alignItems: 'center',
            }}
            shadow={2}
          />
          <Paper
            style={{
              height: 100,
              width: 100,
            }}
            shadow={4}
          />
          <Paper
            style={{
              height: 100,
              width: 100,
            }}
            shadow={8}
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
        The <CodeInline code="Paper" type="element" /> copmonent is a base
        component for displaying surfaces with shadow.
      </div>
    }
    code={code}
    scope={{ View, Paper, Image }}
  />
);
export default MainDemo;
