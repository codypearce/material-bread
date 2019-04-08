import React from 'react';
import { View, Image, Text } from 'react-native';
import { CodeInline, ComponentDemo } from '@components';
import { Avatar, Icon, Chip, IconButton } from '../../../../../../src/index';

export const code = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chipOne: true,
      chipTwo: true,
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>    
          <Chip 
            text={'Mood'}
            themeColor={'primary'}
            radius={2}
            leftIcon={<Icon name="mood" color={'#FBC02D'} />}
            onPress={() => console.log('Mood')}
            onDelete={() => this.setState({chipOne: false})}
            visible={this.state.chipOne}
          />       
          <Chip
              text={'Delete me'}
              radius={2}
              chipStye={'outlined'}
              color={'black'}
              visible={this.state.chipTwo}
              onDelete={() => this.setState({chipTwo: false})}
          />
          <Chip
              text={'Alaska'}
              color={'#009688'}
              radius={100}
              style={{height: 40}}
              visible={this.state.chipThree}
              onDelete={() => this.setState({chipThree: false})}
          />
          <Chip
              text={'User'}
              chipStyle={'outlined'}
              color={'black'}
              radius={2}
              style={{borderWidth: 3, height: 40}}
          >
            <Text style={{fontSize: 18, marginHorizontal: 12, fontWeight: '600'}}>React</Text>
          </Chip>
      </View>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Custom'}
    sectionHref={`${pageHref}#custom`}
    sectionId={'custom'}
    description={
      <div>
        You replace the text content component by passing in{' '}
        <CodeInline code="children" type="prop" />, style the outer component,
        and change the <CodeInline code="radius" type="prop" /> prop to create
        more custom chips.
      </div>
    }
    code={code}
    scope={{ View, Icon, Chip, Avatar, Image, IconButton, Text }}
  />
);
export default SubtitleDemo;
