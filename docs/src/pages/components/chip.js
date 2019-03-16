import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Icon, Checkbox, Chip, Avatar } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';

const sections = [
  { name: 'Demos' },
  { name: 'selected', sub: true },
  { name: 'input', sub: true },
  { name: 'choice', sub: true },
  { name: 'filter', sub: true },
  { name: 'action', sub: true },
];

const propData = [
  createPropData('style', 'Styles root component', 'string', ''),
];

const liveEditCode = `
class ChipPage extends React.Component {
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
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>    
            <Chip text={'Chip'} />       
            <Chip
                canDelete
                onDelete={() => this.setState({chipTwo: false})}
                text={'Delete me'}
                visible={this.state.chipTwo}
            />
            <Chip
                leftIcon={<Icon name="place" color={'#666666'} />}
                canDelete
                onDelete={() => this.setState({chipThree: false})}
                text={'Alaska'}
                visible={this.state.chipThree}

            />
            <Chip
                leftIcon={<Avatar 
                    type="image" 
                    image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
                />}
                text={'User'}
                colorType={'primary'}
                onPress={() => console.log('clicked four')}
            />
            <Chip 
                type={'outlined'}
                text={'Click me'}
                colorType={'primary'} 
                onPress={() => console.log('clicked five')}
            />
            <Chip 
                type={'outlined'}
                text={'Biking'}
                colorType={'secondary'}
                leftIcon={<Icon name="directions-bike" color={'#E91E63'} />}
                canDelete
                visible={this.state.chipSix}
                onDelete={() => this.setState({chipSix: false})}
            / >
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Chip } from 'material-bread';

class ChipPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        chip: true,
      }
    }
    render() {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>         
            <Chip
                canDelete
                onDelete={() => this.setState({chip: false})}
                text={'Delete me'}
                visible={this.state.chip}
            />
        </View>
      );
    }
}`;

export default class ChipPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'chip'}
          title={'Chip'}
          description={
            'Chips are compact elements that represent an input, attribute, or action.'
          }
          docsLink={
            'https://material.io/design/components/selection-controls.html#checkboxes'
          }
          importCode={`import { Chip } from 'material-bread';`}
          componentDescription={
            'Chips can be filled or outlined. You can pass text or replace the text component by passing in children. Either side of the content can be any icon you want. Adding canDelete provides a prebuilt delete icon and ripple. Add onPress and make the entire chip clickable.'
          }
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ View, Chip, Avatar, Image, Icon }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/chip#demos" id="demos" />
        </ComponentPageLayout>
      </div>
    );
  }
}
