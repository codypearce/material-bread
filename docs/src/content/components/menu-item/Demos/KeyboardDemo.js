import React from 'react';
import { View, Text } from 'react-native';
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
        <MenuItem
          text={'Cut'}
          icon={<Icon name={'content-cut'} />}
          keyboardCommand={
            <Text style={{ fontSize: 12, color: '#6e6e6e' }}>&#8984;X</Text>
          }
        />

        <MenuItem
          text={'Copy'}
          icon={<Icon name={'content-copy'} />}
          keyboardCommand={
            <Text style={{ fontSize: 12, color: '#6e6e6e' }}>&#8984;C</Text>
          }
        />

        <MenuItem
          text={'Paste'}
          icon={<Icon name={'content-paste'} />}
          keyboardCommand={
            <Text style={{ fontSize: 12, color: '#6e6e6e' }}>&#8984;V</Text>
          }
        />
      </Paper>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Keyboard'}
    sectionHref={`${pageHref}#keyboard`}
    sectionId={'keyboard'}
    code={code}
    description={
      <div>
        Simply add a node to the{' '}
        <CodeInline code="keyboardCommand" type="prop" /> prop.
      </div>
    }
    scope={{ View, Menu, MenuItem, Paper, Divider, Icon, Text }}
  />
);
export default SubtitleDemo;
