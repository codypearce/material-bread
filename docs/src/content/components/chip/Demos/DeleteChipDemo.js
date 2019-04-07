import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Avatar, Icon, Chip } from '../../../../../../src/index';

export const code = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chipOne: true,
      chipTwo: true,
      chipThree: true,
      chipFour: true,
      chipFive: true,
      chipSix: true
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>    
          <Chip 
            text={'Chip'}
            visible={this.state.chipOne}
            onDelete={() => this.setState({chipOne: false})}   
          />       
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
              visible={this.state.chipFive}
              onDelete={() => this.setState({chipFive: false})}
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
}
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'Delete'}
    sectionHref={`${pageHref}#delete`}
    sectionId={'delete'}
    code={code}
    scope={{ View, Icon, Chip, Avatar, Image, Text }}
    description={
      <div>
        Adding <CodeInline code="canDelete" type="prop" /> provides a prebuilt
        delete icon on the right side, it will replace any right icon provided.
        Toggle the
        <CodeInline code="visible" type="prop" /> prop to show or hide the chip.
      </div>
    }
  />
);
export default IconDemo;
