import React from 'react';
import { View } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  Menu,
  MenuItem,
  Button,
  Paper,
  Divider,
} from '../../../../../src/index';

export const code = `class MenuPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (    
      <Paper radius={6} style={{ width: 200 }}>
     
        <MenuItem text={'Menu Item 1'} />
        <MenuItem text={'Menu Item 2'} />
        <Divider />
        <MenuItem disabled text={'Menu Item 3'} />
        <MenuItem text={'Menu Item 4'} />
      </Paper>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <CodeInline code="MenuItem" type="element" />s can contain text or
        icons. You can create a more custom one by replacing the children.
      </div>
    }
    code={code}
    scope={{ View, Menu, MenuItem, Button, Paper, Divider }}
  />
);
export default MainDemo;
