import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { Fab, Button } from '../../../../../../src/index';

export const code = `class Page extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible: true,
      }
    }
    render() {
      return (
        <View>
           <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
            <Fab animated visible={this.state.visible} icon={'add'} />
            <Fab
                animated
                visible={this.state.visible}
                backgroundColor={'#E91E63'}
                icon={'archive'}
            />
            <Fab
                animated
                visible={this.state.visible}
                backgroundColor={'#F44336'}
                icon={'delete'}
            />
            <Fab
                animated
                visible={this.state.visible}
                mini
                backgroundColor={'#009688'}
                icon={'edit'}
            />
            <Fab
                animated
                visible={this.state.visible}
                mini
                backgroundColor={'black'}
                icon={'attach-money'}
            />
            <Fab
                animated
                disabled
                visible={this.state.visible}
                mini
                backgroundColor={'#009688'}
                icon={'delete'}
           />
           </View>
           <Button
              text={'Toggle visibility'}
              onPress={() => this.setState({ visible: !this.state.visible })}
            />
        </View>
      );
    }
  }`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Animated'}
    sectionHref={`${pageHref}#animated`}
    sectionId={'animated'}
    code={code}
    scope={{ View, Fab, Button, Text }}
  />
);
export default SubtitleDemo;
