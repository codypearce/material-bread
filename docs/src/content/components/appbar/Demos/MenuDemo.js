import React from 'react';
import { CodeInline, ComponentDemo } from '@components';
import {
  Appbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '../../../../../../src/index';

export const code = ` 
class AppbarDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleOne: false
    };
  }

  render() {

    return (
      <Appbar
        barType={'normal'}
        navigation={'menu'}
        color={'#00BCD4'}
        style={{ marginBottom: 20 }}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          <Menu
            visible={this.state.visibleOne}
            onBackdropPress={() => {
              console.log('called')
              this.setState({visibleOne: false})
            }
            }
            button={
              <Button
                textColor={'white'}
                text={'Show menu'}
                onPress={() => this.setState({ visibleOne: !this.state.visibleOne })}
                type="text"
              />
          }>
            <MenuItem text={'Menu item 1'} onPress={() => this.setState({ visible: false })} />
            <MenuItem text={'Menu item 2'} onPress={() => this.setState({ visible: false })} />
            <MenuItem text={'Menu item 3'} onPress={() => this.setState({ visible: false })} />
          </Menu>,
        ]}
      />
    );
  }
}`;

const MenuDemo = pageHref => (
  <ComponentDemo
    sectionName={'Menu'}
    sectionHref={`${pageHref}#menu`}
    sectionId={'menu'}
    description={
      <div>
        You can add a <CodeInline code="Menu" type={'element'} /> to the{' '}
        <CodeInline code="Appbar" type={'element'} />
        as shown below.
      </div>
    }
    code={code}
    scope={{ Appbar, IconButton, Menu, MenuItem, Button }}
  />
);
export default MenuDemo;
