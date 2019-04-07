import React from 'react';
import { View, Image } from 'react-native';
import { CodeInline, ComponentDemo } from '@components';
import {
  BottomNavigation,
  BottomNavigationItem,
  Icon,
  Avatar,
} from '../../../../../../src/index';

export const code = `class BottomTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Home'
    }
  }

  handleChange(value) {
      this.setState({value});
  }
 
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <BottomNavigation 
            style={{ maxWidth: 672, width: '100%', height: 42, borderTopRightRadius: 6, borderTopLeftRadius: 6 }}
            backgroundColor={'black'}
            actionItems={[
                <BottomNavigationItem 
                    value={'Home'} 
                    active={this.state.value === 'Home'} 
                    handleChange={(value) => this.handleChange(value)}
                    style={{height: 42}}
                >
                    <Icon name="home" size={30} color={'white'} />
                </BottomNavigationItem>,
                <BottomNavigationItem 
                    value={'Favorite'} 
                    active={this.state.value === 'Favorite'} 
                    handleChange={(value) => this.handleChange(value)}
                    style={{height: 42}}
                >
                    <Icon name="favorite" size={30} color={'white'} />
                </BottomNavigationItem>,
                <BottomNavigationItem 
                    value={'Info'} 
                    active={this.state.value === 'Info'} 
                    handleChange={(value) => this.handleChange(value)}
                    style={{height: 42}}
                >
                    <Icon name="info" size={30} color={'white'} />
                </BottomNavigationItem>,
               
               
                <BottomNavigationItem 
                    value={'Settings'} 
                    active={this.state.value === 'Settings'} 
                    handleChange={(value) => this.handleChange(value)}
                    style={{height: 42, flexDirection: 'row'}}
                >
                    <Avatar 
                        type="image" 
                        image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
                        size={30}
                    /> 
                    <Icon
                        name="expand-more"
                        size={20}
                        color={'white'}
                        style={{alignSelf: 'flex-end', marginBottom: 4}}
                    />
                </BottomNavigationItem>, 
            ]}
        />
      </View>
    );
  }
}
`;

const CustomDemo = pageHref => (
  <ComponentDemo
    sectionName={'Custom'}
    sectionHref={`${pageHref}#custom`}
    sectionId={'custom'}
    description={
      <div>
        Adding <CodeInline code="children" type="prop" /> will replace all{' '}
        <CodeInline code="actionItems" type="prop" />, but still provide logic
        for for switching the active item.
      </div>
    }
    code={code}
    scope={{
      View,
      BottomNavigation,
      BottomNavigationItem,
      Icon,
      Avatar,
      Image,
    }}
  />
);
export default CustomDemo;
