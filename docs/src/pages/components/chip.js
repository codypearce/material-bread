import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Icon, IconButton, Chip, Avatar } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import CodeInline from '../../components/CodeInline';
import propData from '../../content/components/chip/propData';

const sections = [
  { name: 'Demos' },
  { name: 'delete', sub: true },
  { name: 'icons', sub: true },
  { name: 'custom', sub: true },
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

const deleteCode = `class ChipPage extends React.Component {
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
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>    
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
}`;

const iconCode = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chipTwo: true,
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>    
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
}`;

const custom = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chipOne: true,
      chipTwo: true,
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>    
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
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ View, Chip, Avatar, Image, Icon }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/chip#demos" id="demos">
            <ComponentDescription
              text={
                <div>
                  Chips have two styles:{' '}
                  <CodeInline code="filled" type="value" /> or{' '}
                  <CodeInline code="outlined" type="value" />. Adding{' '}
                  <CodeInline code="onPress" type="prop" />
                  will make the entire chip clickable. The rest can be
                  customized as shown below.
                </div>
              }
            />
          </Section>
          <Section name="Delete" href="/components/chip#delete" id="delete">
            <ComponentDescription
              text={
                <div>
                  Adding <CodeInline code="canDelete" type="prop" /> provides a
                  prebuilt delete icon on the right side, it will replace any
                  right icon provided. Toggle the
                  <CodeInline code="visible" type="prop" /> prop to show or hide
                  the chip.
                </div>
              }
            />
            <LiveEdit
              code={deleteCode}
              scope={{ View, Icon, Chip, Avatar, Image }}
            />
          </Section>
          <Section name="Icons" href="/components/chip#icon" id="icon">
            <ComponentDescription
              text={
                <div>
                  There are component spots on either side of the content in the
                  chip. usually you psas an{' '}
                  <CodeInline code="Icon" type="element" />,{' '}
                  <CodeInline code="Avatar" type="element" />, or
                  <CodeInline code="IconButton" type="element" />, but you can
                  pass whatever you want. However, the right icon will be
                  overwritten if you pass{' '}
                  <CodeInline code="onPress" type="prop" />, see second chip.
                </div>
              }
            />
            <LiveEdit
              code={iconCode}
              scope={{ View, Icon, Chip, Avatar, Image, IconButton }}
            />
          </Section>
          <Section name="Custom" href="/components/chip#custom" id="custom">
            <ComponentDescription
              text={
                <div>
                  You replace the text content component by passing in{' '}
                  <CodeInline code="children" type="prop" />, style the outer
                  component, and change the{' '}
                  <CodeInline code="radius" type="prop" /> prop to create more
                  custom chips.
                </div>
              }
            />
            <LiveEdit
              code={custom}
              scope={{ View, Icon, Chip, Avatar, Image, IconButton, Text }}
            />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
