import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Chip } from 'material-bread';

class ChipPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        chip: true,
      }
    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>         
            <Chip
                canDelete
                onDelete={() => this.setState({chip: false})}
                text={'Delete me'}
                visible={this.state.chip}
            />
        </View>
      );
    }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
