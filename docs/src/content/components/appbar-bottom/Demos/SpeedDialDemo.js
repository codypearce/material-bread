import React from 'react';
import { ComponentDemo } from '@components';
import { AppbarBottom, Fab } from '../../../../../../src/index';

export const code = `
class FabPage extends React.Component {
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
        <AppbarBottom
            fab
            fabCutout
            fabPosition={'end'}
            fabActions={actions}
            navigation={'arrow-back'}
            fabStyles={{ backgroundColor: '#E91E63' }}
            actionItems={[
            { name: 'search', onPress: () => console.log('onSearch') },
            { name: 'more-vert' },
            ]}
        />
      );
    }
  }
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'SpeedDial'}
    sectionHref={`${pageHref}#speeddial`}
    sectionId={'speeddial'}
    code={code}
    scope={{ AppbarBottom, Fab }}
  />
);
export default SubtitleDemo;
