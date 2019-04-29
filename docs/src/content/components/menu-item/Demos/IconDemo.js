import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import {
  Menu,
  MenuItem,
  Paper,
  Divider,
  Icon,
} from '../../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <Paper radius={6} style={{ width: 200 }}>
        <MenuItem text={'Preview'} icon={<Icon name={'remove-red-eye'} />} />
        <MenuItem text={'Share'} icon={<Icon name={'person-add'} />} />
        <MenuItem text={'Get Link'} icon={<Icon name={'link'} />} />
        <Divider />
        <MenuItem text={'Preview'} icon={<Icon name={'content-copy'} />} />
        <MenuItem text={'Download'} icon={<Icon name={'file-download'} />} />
      </Paper>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Icon'}
    sectionHref={`${pageHref}#icon`}
    sectionId={'icon'}
    code={code}
    description={
      <div>
        Simply add a node to the <CodeInline code="icon" type="prop" /> prop.
      </div>
    }
    scope={{ View, Menu, MenuItem, Paper, Divider, Icon }}
  />
);
export default SubtitleDemo;
