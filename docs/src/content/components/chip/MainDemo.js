import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import { Chip, Avatar, Icon } from '../../../../../src/index';

export const code = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chipTwo: true,
      chipThree: true,
      chipSix: true
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>    
          <Chip text={'Chip'} />       
          <Chip
              text={'Delete me'}
              visible={this.state.chipTwo}
              onDelete={() => this.setState({chipTwo: false})}   
          />
          <Chip
              text={'Alaska'}
              color={'#009688'}
              visible={this.state.chipThree}
              onDelete={() => this.setState({chipThree: false})}
              leftIcon={<Icon name="place" color={'white'} />}
          />
          <Chip
              text={'User'}
              themeColor={'primary'}
              onPress={() => console.log('clicked four')}
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
          />
          <Chip 
              text={'Biking'}
              chipStyle={'outlined'}
              themeColor={'secondary'}
              leftIcon={<Icon name="directions-bike" color={'#E91E63'} />}
              visible={this.state.chipSix}
              onDelete={() => this.setState({chipSix: false})}
          / >
      </View>
    );
  }
}`;

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        This is the base Chip component for the four types of chips:
        <CodeInline code="InputChip" type="element" />,{' '}
        <CodeInline code="ChoiceChip" type="element" />,
        <CodeInline code="FilterChip" type="element" />, and{' '}
        <CodeInline code="ActionChip" type="element" />. Using this base
        component directly gives you more customization options and more
        flexibility.
      </div>
    }
    code={code}
    scope={{ View, Chip, Avatar, Image, Icon, Text }}
  />
);
export default MainDemo;
