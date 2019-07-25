import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
// import HomeLiveEditToolTip from './HomeLiveEditToolTip';
import BrowserCSS from '../BrowserCSS';
import { View, Image, Text } from 'react-native';
import {
  Backdrop,
  List,
  ListItem,
  Icon,
  IconButton,
  Avatar,
  Heading,
} from '../../../../src';

const thiscode = `
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
          textStyle={{fontSize: 12, flex: 1}}
          secondaryTextStyle={{fontSize: 10}}
          style={{width: '100%', paddingLeft: 12, paddingRight: 12}}
        /> 
    );

    return (
      <View style={{marginBottom: 80}}>
        <Backdrop backLayerConcealed={backLayerConcealed} backLayerRevealed={backLayerRevealed} offset={249} >
            <Heading text={'Albums'} style={{ marginLeft: 20, fontSize: 14,}} />
            <AlbumItem text={'Back in Black'} secondaryText={'AC/DC'} />
            <AlbumItem text={'Hotel California'} secondaryText={'Eagles'} />
            <AlbumItem text={'Paranoid'} secondaryText={'Black Sabbath'} />
            <AlbumItem text={'Led Zeppelin IV'} secondaryText={'Led Zeppelin'} />
        </Backdrop>
      </View>
    );
  }
}
`;
class LiveEdit extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    code: PropTypes.string,
    scope: PropTypes.object,
    syntax: PropTypes.string,
    noInline: PropTypes.bool,
    preview: PropTypes.string,
  };

  render() {
    const { noInline, preview } = this.props;
    if (typeof window == 'undefined') {
      return null;
    }
    return (
      <LiveProvider
        code={thiscode}
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
        mountStylesheet={false}
        noInline={noInline}
        style={{
          borderRadius: 6,
          backgroundColor: 'transparent',
          maxWidth: 800,
          margin: '0 auto',
          width: '100%',
        }}>
        <BrowserCSS preview={preview}>
          <LivePreview
            style={{
              width: '100%',
              borderTopRightRadius: 6,
              borderTopLeftRadius: 6,
              backgroundColor: 'transparent',
              height: '100%',
            }}
          />
        </BrowserCSS>

        <LiveError
          style={{
            backgroundColor: '#ffebeb',
            color: '#EF5350',
            padding: 24,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          }}
        />
      </LiveProvider>
    );
  }
}

export default LiveEdit;
