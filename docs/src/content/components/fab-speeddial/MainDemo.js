import React from 'react';
import { View, Image } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Fab, FabSpeedDial } from '../../../../../src/index';

export const code = `class FabPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const actions = [
      <Fab key={1} backgroundColor={'#E91E63'} icon={'archive'} />,
      <Fab key={2}  backgroundColor={'#F44336'} icon={'delete'} />,
      <Fab key={3} backgroundColor={'#009688'} icon={'edit'} />,
      <Fab key={4} backgroundColor={'black'} icon={'attach-money'} />,
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
      <div>
        <CodeInline code="FabSpeedDial" type="element" /> accepts an array of{' '}
        <CodeInline code="actions" type="prop" /> which will animate out from
        the provided fab. You can pass a string to the{' '}
        <CodeInline code="fab" type="prop" /> prop and it will update the icon
        or you can pass a <CodeInline code="Fab" type="element" /> element for
        more customization.
      </div>
    }
    code={code}
    scope={{ View, FabSpeedDial, Fab, Image }}
  />
);
export default MainDemo;
