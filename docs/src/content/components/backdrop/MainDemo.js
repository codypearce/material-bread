import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  Backdrop,
  List,
  ListItem,
  Icon,
  IconButton,
  Avatar,
  Heading,
} from '../../../../../src/index';

export const code = `
class Page extends React.Component {
  render() {
    const styles = {
      backdropHeader: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
      },
      backdropHeaderTitle: {
        fontSize: 18,
        color: 'white',
        marginLeft: 72,
      },
    };

    const NavItem = ({ text, icon, selected }) => {
      return (
        <ListItem
          text={text}
          textStyle={{ color: 'white' }}
          selected={selected}
          style={{ backgroundColor: 'transparent' }}
          icon={<Icon name={icon} size={24} color={'white'} />}
        />
      )
    }

    const backLayerRevealed = (
      <View>
        <View style={styles.backdropHeader}>
          <Text style={styles.backdropHeaderTitle}>Navigation</Text>
        </View>
        <List style={{ backgroundColor: 'transparent' }}>
          <NavItem text={'Home'} icon={'home'} selected />
          <NavItem text={'Music'} icon={'music-note'} />
          <NavItem text={'Favorites'} icon={'favorite'} />
          <NavItem text={'Settings'} icon={'settings'} />
        </List>
      </View>
    );

    const backLayerConcealed = (
      <View style={styles.backdropHeader}>
        <Text style={styles.backdropHeaderTitle}>App</Text>
      </View>
    );

    const album = (
      <Avatar
        type="icon"
        content="album"
        contentColor={'#ececec'}
        color={'#a3a3a3'}
        size={30}
      />
    );
    const iconFav = <IconButton name="favorite" size={24} color="#6e6e6e" />
    
    const AlbumItem = ({ text, secondaryText }) => ( 
        <ListItem 
          text={text}
          secondaryText={secondaryText} 
          media={album} 
          actionItem={iconFav} 
        /> 
    );

    return (
      <View style={{marginBottom: 80}}>
        <Backdrop backLayerConcealed={backLayerConcealed} backLayerRevealed={backLayerRevealed} offset={249} >
            <Heading text={'Albums'} style={{ marginLeft: 20, fontSize: 14,}} />
            <AlbumItem text={'Back in Black'} secondaryText={'AC/DC'} />
            <AlbumItem text={'Hotel California'} secondaryText={'Eagles'} />
            <AlbumItem text={'Dark Side of the Moon'} secondaryText={'Pink Floyd'} />
            <AlbumItem text={'Led Zeppelin IV'} secondaryText={'Led Zeppelin'} />
        </Backdrop>
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        <div style={{}}>
          The <CodeInline code="Backdrop" type="element" /> is composed of three
          main parts: <CodeInline code="backLayerConcealed" type="prop" />,{' '}
          <CodeInline code="backLayerRevealed" type="prop" />, and the{' '}
          <CodeInline code="frontLayer" type="value" />.{' '}
          <CodeInline code="backLayerConcealed" type="prop" /> renders the{' '}
          backlayer when the <CodeInline code="frontLayer" type="value" /> is
          showing. <CodeInline code="backLayerRevealed" type="prop" /> renders
          the full backlayer.
          <CodeInline code="children" type="prop" /> renders as the{' '}
          <CodeInline code="frontLayer" type="value" />.
        </div>
        <div style={{ marginTop: 20 }}>
          By default when the <CodeInline code="backLayer" type="value" /> is
          activated it will take up the full height of the device with the{' '}
          <CodeInline code="frontLayer" type="value" /> at the bottom. You can
          customize this by passing a number to the{' '}
          <CodeInline code="offset" type="prop" /> prop for the size the
          backlayer should take up.
        </div>
      </div>
    }
    code={code}
    scope={{
      Backdrop,
      List,
      ListItem,
      Icon,
      IconButton,
      Avatar,
      Heading,
      View,
      Image,
      Text,
    }}
  />
);
export default MainDemo;
