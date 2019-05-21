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
      
      return (
        <View style={styles.container}>
            <Drawer
                open={this.state.isOpen}
                pageHeight={500}
                drawerContent={<DrawerContent />}
                onClose={() => this.setState({ isOpen: false })}
                appbar={<AppbarContent  />}
            >
                <PageContent />
            </Drawer>
        </View>
      );
    }
  }
`;

const ClippedDemo = pageHref => (
  <ComponentDemo
    sectionName={'Clipped'}
    sectionHref={`${pageHref}#clipped`}
    sectionId={'clipped'}
    description={
      <div>
        Simply move the <CodeInline code="Appbar" type="element" /> component
        into the <CodeInline code="appbar" type="prop" /> prop and it will
        dispaly above the <CodeInline code="Drawer" type="element" /> and{' '}
        <CodeInline code="Scrim" type="element" />
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
export default ClippedDemo;
