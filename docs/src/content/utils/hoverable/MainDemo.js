import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo } from '@components';
import { Hoverable } from '../../../../../src/index';

export const code = `class Demo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        color: '#009688'
      }
    }
  
    handleHover(toggle) {
      this.setState({ color: toggle ? '#00BCD4' : '#009688' });
    }
  
    render() {
      return (
        <Hoverable
          onHoverIn={() => this.handleHover(true)}
          onHoverOut={() => this.handleHover(false)}
        >
          <View style={{width: 200, height: 125, backgroundColor: this.state.color}} />
        </Hoverable>
      );
    }
  }`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      'Wrap a component in Hoverable and activate a change when the user hovers over a component.'
    }
    code={code}
    scope={{ View, Hoverable }}
  />
);
export default MainDemo;
