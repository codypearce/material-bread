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

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  backdropHeader: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backdropHeaderTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    marginLeft: 72,
  },
};

const backLayerRevealed = (
  <View style={{ flex: 1, width: '100%' }}>
    <View style={styles.backdropHeader}>
      <Text style={styles.backdropHeaderTitle}>Navigation</Text>
    </View>

    <List
      style={{
        width: '100%',
        backgroundColor: 'transparent',
      }}>
      <ListItem
        text={'Home'}
        textStyle={{ color: 'white' }}
        selected
        style={{ backgroundColor: 'transparent' }}
        icon={<Icon name={'home'} size={24} color={'white'} />}
      />
      <ListItem
        text={'Music'}
        textStyle={{ color: 'white' }}
        style={{ backgroundColor: 'transparent' }}
        icon={<Icon name={'music-note'} size={24} color={'white'} />}
      />
      <ListItem
        text={'Favorites'}
        textStyle={{ color: 'white' }}
        style={{ backgroundColor: 'transparent' }}
        icon={<Icon name={'favorite'} size={24} color={'white'} />}
      />
      <ListItem
        text={'Settings'}
        textStyle={{ color: 'white' }}
        style={{ backgroundColor: 'transparent' }}
        icon={<Icon name={'settings'} size={24} color={'white'} />}
      />
    </List>
  </View>
)

const album = (
  <Avatar
    type="icon"
    content="album"
    contentColor={'#ececec'}
    color={'#a3a3a3'}
    size={40}
  />
)
const iconFav = <IconButton name="favorite" size={24} color="#6e6e6e" />

class Page extends React.Component {
  render() {
    return (
      <View style={{marginBottom: 80}} >
        <Backdrop
          backLayerConcealed={
            <View style={styles.backdropHeader}>
              <Text style={styles.backdropHeaderTitle}>App</Text>
            </View>
          }
          backLayerRevealed={backLayerRevealed}
          offset={260}>
          <View style={styles.container}>
            <Heading
              text={'Albums'}
              style={{
                alignSelf: 'flex-start',
                marginLeft: 20,
                fontSize: 20,
              }}
            />
            <ListItem
              text={'Back in Black'}
              secondaryText={'AC/DC'}
              media={album}
              actionItem={iconFav}
            />
            <ListItem
              text={'Hotel California'}
              secondaryText={'Eagles'}
              media={album}
              actionItem={iconFav}
            />
            <ListItem
              text={'Dark Side of the Moon'}
              secondaryText={'Pink Floyd '}
              media={album}
              actionItem={iconFav}
            />
            <ListItem
              text={'Led Zeppelin IV'}
              secondaryText={'Led Zeppelin'}
              media={album}
              actionItem={iconFav}
            />
          </View>
        </Backdrop>
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
