import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
  Heading,
  BodyText,
  Appbar,
} from '../../../../../../src/index';

export const code = `class DrawerPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isOpen: false
      }
    }
    render() {
      const DrawerContent = () => {
        return (
          <View>
            <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
            <DrawerSection bottomDivider>
              <DrawerItem text={'Inbox'} icon={'mail'} active />
              <DrawerItem text={'Outbox'} icon={'send'} />
              <DrawerItem text={'Favorites'} icon={'favorite'} />
            </DrawerSection>
          </View>
        );
      };
      
      const PageContent = () => {
        return (
          <View style={styles.body}>
            <Heading type={4} style={{ marginBottom: 20 }}>
              This is a page
            </Heading>
            <BodyText text={'Click the menu button to open the drawer'} />
            <BodyText text={'Click outside the drawer to close it'} />
          </View>
        );
      };
      
      const AppbarContent = () => {
        return (
          <Appbar
            barType={'normal'}
            title={'Page Title'}
            navigation={'menu'}
            onNavigation={() => this.setState({ isOpen: !this.state.isOpen })}
            actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
          />
        );
      };
      
      const styles = {
        container: {
          zIndex: 1,
          border: '1px solid rgba(0,0,0,.12)'
        },
        body: {
          backgroundColor: '#eee',
          height: 400,
          minHeight: 400,
          width: '100%', 
          flex: 1,
          paddingTop: 20, 
          alignItems: 'center', 
        },
      };
      return (
        <View style={styles.container}>
            <Drawer
                open={this.state.isOpen}
                pageHeight={500}
                drawerContent={<DrawerContent />}
                onClose={() => this.setState({ isOpen: false })}
                appbar={<AppbarContent  />}
                type={'push'}
            >
                <PageContent />
            </Drawer>
        </View>
      );
    }
  }
`;

const PushDemo = pageHref => (
  <ComponentDemo
    sectionName={'Push'}
    sectionHref={`${pageHref}#push`}
    sectionId={'push'}
    description={
      <div>
        The <CodeInline code="push" type="value" /> type pushes the content to
        the right rather than overlaying on top of it like{' '}
        <CodeInline code="modal" type="value" /> type. This example shows under
        the <CodeInline code="Appbar" type="element" />, but you can easily move
        it as a child instead of in the <CodeInline code="appbar" type="prop" />{' '}
        and it will push the whole page.
      </div>
    }
    code={code}
    scope={{
      View,
      Drawer,
      DrawerItem,
      DrawerHeader,
      DrawerSection,
      Heading,
      BodyText,
      Appbar,
    }}
  />
);
export default PushDemo;
