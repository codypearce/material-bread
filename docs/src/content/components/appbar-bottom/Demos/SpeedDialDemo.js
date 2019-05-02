import React from 'react';
import { ComponentDemo } from '@components';
import { AppbarBottom, Fab, FabSpeedDial } from '../../../../../../src/index';

export const code = `
class Page extends React.Component {
    constructor(props) {
      super(props)
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
            fab={
              <FabSpeedDial
                actions={actions}
                fab={<Fab backgroundColor={'black'} />}
              />
            }
            fabCutout
            fabPosition={'end'}
            navigation={'arrow-back'}
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
    scope={{ AppbarBottom, Fab, FabSpeedDial }}
  />
);
export default SubtitleDemo;
