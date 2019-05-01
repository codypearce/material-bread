import React from 'react';
import { View, Image } from 'react-native';
import { ComponentDemo } from '@components';
import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
  Heading,
  BodyText,
  Appbar,
  Avatar,
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
            <DrawerHeader
              title={'Jon Snow'}
              subtitle={'Knows nothing'}
              avatar={
                <Avatar
                  type="image"
                  image={
                    <Image
                      source={{
                        uri:
                          'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
                      }}
                    />
                  }
                  size={40}
                />
              }
            />
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
          height: 300,
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
    sectionName={'Avatar'}
    sectionHref={`${pageHref}#avatar`}
    sectionId={'avatar'}
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
      Image,
      Avatar,
    }}
  />
);
export default PushDemo;
