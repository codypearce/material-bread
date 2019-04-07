import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Avatar, IconButton, Icon, Chip } from '../../../../../../src/index';

export const code = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chipTwo: true,
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>    
          <Chip 
            text={'Mood'}
            leftIcon={<Icon name="mood" color={'#4CAF50'} />}
            rightIcon={<Icon name="mood-bad" color={'#F44336'} />}
            onPress={() => console.log('Mood')}
          />       
          <Chip
              text={'Delete me'}
              visible={this.state.chipTwo}
              onDelete={() => this.setState({chipTwo: false})}
              rightIcon={<Icon name="face" color={'#666666'} />}
          />
          <Chip
              text={'Alaska'}
              color={'#009688'}
              rightIcon={<IconButton name="place" color={'white'} onPress={() => console.log('clicked second right icon')} />}
              />
          <Chip
              text={'User'}
              themeColor={'primary'}
              onPress={() => console.log('clicked four')}
              visible={this.state.chipFour}
              onDelete={() => this.setState({chipFour: false})}
              leftIcon={<Avatar 
                type="image" 
                image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
              />}
          />
          <Chip 
              text={'Click me'}
              chipStyle={'outlined'}
              themeColor={'primary'} 
              onPress={() => console.log('clicked five')}
              leftIcon={<Avatar 
                type="text" 
                content="MP" 
                />
              }
          />
          <Chip 
              text={'Biking'}
              chipStyle={'outlined'}
              themeColor={'secondary'}
              leftIcon={<Icon name="directions-bike" color={'#E91E63'} />}
              rightIcon={<Avatar 
                type="icon" 
                content="directions-bike"
                contentColor="white"
                color={'#E91E63'}
              />}
          / >
      </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Icons'}
    sectionHref={`${pageHref}#icon`}
    sectionId={'icon'}
    description={
      <div>
        There are component spots on either side of the content in the chip.
        usually you psas an <CodeInline code="Icon" type="element" />,{' '}
        <CodeInline code="Avatar" type="element" />, or
        <CodeInline code="IconButton" type="element" />, but you can pass
        whatever you want. However, the right icon will be overwritten if you
        pass <CodeInline code="onPress" type="prop" />, see second chip.
      </div>
    }
    code={code}
    scope={{ View, Icon, Chip, Avatar, Image, IconButton, Text }}
  />
);
export default SubtitleDemo;
