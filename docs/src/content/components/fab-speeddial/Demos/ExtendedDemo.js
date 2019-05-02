import React from 'react';
import { View, Text } from 'react-native';
import { ComponentDemo } from '@components';
import { Fab, FabSpeedDial, Button } from '../../../../../../src/index';

export const code = `class FabPage extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const actionsExtended = [
        <Fab key={4} label="Buy" backgroundColor={'black'} icon={'attach-money'} />,
        <Fab key={3} label="Edit" backgroundColor={'#009688'} icon={'edit'} />,
        
        <Fab key={2} label="Delete" backgroundColor={'#F44336'} icon={'delete'} />,
        <Fab key={1} label="Archive" backgroundColor={'#E91E63'} icon={'archive'} />,
       ];
      return (
        <View>
          <FabSpeedDial
            actions={actionsExtended}
            style={{ marginTop: 400 }}
            fab={<Fab label="Open" icon="add" />}
          />
        </View>
      );
    }
  }`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Extended'}
    sectionHref={`${pageHref}#extended`}
    sectionId={'extended'}
    code={code}
    scope={{ View, FabSpeedDial, Fab, Button, Text }}
  />
);
export default SubtitleDemo;
