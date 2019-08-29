import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React from 'react';
import { 
  Backdrop,
  List,
  ListItem,
  Icon,
  IconButton,
  Avatar,
  Heading, 
} from 'material-bread';

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

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
