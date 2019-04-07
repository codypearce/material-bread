import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Hoverable } from 'material-bread';

class Demo extends React.Component {
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
  }`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
