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
        isOpen: true
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
          alignItems: 'center',
          paddingTop: 20
        },
      };
      return (
        <View style={[styles.container, { width: 'auto' }]}>
            <Drawer
                open={this.state.isOpen}
                pageHeight={500}
                drawerContent={<DrawerContent />}
                onClose={() => store.set({ isOpen: false })}
                type={'permanent'}
            >
                <View style={{width: '100%'}}>
                    <AppbarContent />
                    <PageContent />
                </View>
            </Drawer>
        </View>
      );
    }
  }
`;

const PermanentDemo = pageHref => (
  <ComponentDemo
    sectionName={'Permanent '}
    sectionHref={`${pageHref}#permanent`}
    sectionId={'permanent'}
    description={
      <div>
        The <CodeInline code="permanent" type="value" /> type is similiar to the{' '}
        <CodeInline code="push" type="value" /> type because there are no
        overlays, but instead of pushing the content to the right, it changes
        the width of the content to accommodate the drawer width. Toggling the
        drawer now changes the width of the page rather than the position left.
        As with the other types you can clip the drawer under the{' '}
        <CodeInline code="Appbar" type="element" />.
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
export default PermanentDemo;
