import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Menu, MenuItem, Button } from '../../../../../../src/index';

export const code = `class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <View style={{marginBottom: 200}}>
        <Menu
          visible={this.state.visible}
          menuStyle={{ maxHeight: 200 }}
          button={
            <Button
              text={'Show menu'}
              onPress={() => {
                this.setState({ visible: !this.state.visible });
              }}
              type="contained" />
          }>
          <MenuItem text={'Menu item 1'} onPress={() => this.setState({ visible: false })} />
          <MenuItem text={'Menu item 2'} onPress={() => this.setState({ visible: false })} />
          <MenuItem text={'Menu item 3'} onPress={() => this.setState({ visible: false })} />
          <MenuItem text={'Menu item 4'} onPress={() => this.setState({ visible: false })} />
          <MenuItem text={'Menu item 5'} onPress={() => this.setState({ visible: false })} />
          <MenuItem text={'Menu item 6'} onPress={() => this.setState({ visible: false })} />
          <MenuItem text={'Menu item 7'} onPress={() => this.setState({ visible: false })} />
        </Menu>
      </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Scrolling'}
    sectionHref={`${pageHref}#scrolling`}
    sectionId={'scrolling'}
    code={code}
    description={
      <div>
        Provide <CodeInline code="maxheight" type="prop" /> to scroll the
        content.
      </div>
    }
    scope={{ View, Menu, MenuItem, Button }}
  />
);
export default SubtitleDemo;
