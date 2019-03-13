import React, { Component } from 'react';
import { View, Image } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  BottomNavigation,
  BottomNavigationItem,
  Icon,
  Avatar,
  Badge,
} from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';

const sections = [
  { name: 'Demos' },
  { name: 'badges', sub: true },
  { name: 'styled', sub: true },
  { name: 'custom', sub: true },
];

const propData = [
  createPropData(
    'actionItems',
    'Array of objects displaying tab items',
    'array',
    '',
  ),
  createPropData(
    'active',
    'Active item is handled internally with BottomNavigatino, but you can controll it manually with this prop',
    'bool',
    '',
  ),

  createPropData(
    'badgeProps',
    'Each prop is a key, adding any prop will show the badge over the icon.',
    'object',
    '',
  ),

  createPropData(
    'handleChange',
    'Is set by BottomNavigation prop, but can be overwritten individually here',
    'func',
    '',
  ),

  createPropData('icon', 'Name of material icon displayed', 'string', ''),

  createPropData('label', 'Text to display underneath the icon', 'string', ''),

  createPropData('onPress', 'callBack to fire when clicking item', 'func', ''),

  createPropData(
    'showLabel',
    'Set by BottomNavigation prop, but can be overwritten individually here',
    'bool',
    '',
  ),

  createPropData('style', 'Styles root banner element', 'object', ''),

  createPropData(
    'value',
    'Set by BottomNavigation prop as index, but can be overwritten individually here',
    'number',
    '',
  ),
];

const liveEditCode = `
class BottomTabs extends React.Component {
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
            style={{width: 672 }}
            actionItems={[
                <BottomNavigationItem 
                    icon={'home'} 
                    value={'Home'} 
                    active={this.state.value === 'Home'} 
                    handleChange={(value) => this.handleChange(value)}

                />,
                <BottomNavigationItem 
                    icon={'favorite'} 
                    value={'Favorite'} 
                    active={this.state.value === 'Favorite'} 
                    handleChange={(value) => this.handleChange(value)}
                />,
                <BottomNavigationItem 
                    icon={'info'} 
                    value={'Info'} 
                    active={this.state.value === 'Info'} 
                    handleChange={(value) => this.handleChange(value)}
                    label={'Info'}
                />,
                <BottomNavigationItem 
                    icon={'settings'} 
                    value={'Settings'} 
                    active={this.state.value === 'Settings'} 
                    handleChange={(value) => this.handleChange(value)}
                    showLabel
                    label={'Settings'}
                />, 
            ]}
        />
      </View>
    );
  }
}`;

const usageCode = `import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-bread';

class BottomTabs extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: 0
      }
    }
  
    handleChange(value) {
        this.setState({value});
    }
   
    render() {
      return (
        <BottomNavigation 
            style={{width: 672 }}
            value={this.state.value}
            handleChange={(value) => this.handleChange(value)}
            actionItems={[
                <BottomNavigationItem icon={'home'} label={'Home'} />,
                <BottomNavigationItem icon={'favorite'} label={'Favorite'} />,
                <BottomNavigationItem icon={'info'} label={'Info'} />,
                <BottomNavigationItem icon={'settings'} label={'Settings'} />, 
            ]}
        />
      );
    }
  }`;

const badges = `
class BottomTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChange(value) {
      this.setState({value});
  }
 
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <BottomNavigation 
            style={{width: 672 }}
            backgroundColor={'white'}
            value={this.state.value}
            handleChange={(value) => this.handleChange(value)}
            actionItems={[
                <BottomNavigationItem icon={'home'} label={'Home'} />,
                <BottomNavigationItem icon={'favorite'} label={'Favorite'} badgeProps={{
                  size: 7, color: 'red', right: 1, top: 2
                }} />,
                <BottomNavigationItem icon={'info'} label={'Info'} />,
                <BottomNavigationItem
                    icon={'settings'}
                    label={'Settings'}
                    badgeProps={{
                        content: 72, size: 14, color: 'red',
                    }}
                />, 
            ]}
        />
      </View>
    );
  }
}`;

const styled = `
class BottomTabs extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: 0
      }
    }
  
    handleChange(value) {
        this.setState({value});
    }
   
    render() {
      return (
        <View style={{alignItems: 'center'}}>
          <BottomNavigation 
              style={{width: 672 }}
              showLabels
              value={this.state.value}
              handleChange={(value) => this.handleChange(value)}
              backgroundColor={'transparent'}
              actionItems={[
                <BottomNavigationItem
                    icon={'home'}
                    label={'Home'} 
                    style={{backgroundColor: '#3F51B5'}}
                />,
                <BottomNavigationItem
                    icon={'favorite'}
                    label={'Favorite'}
                    style={{backgroundColor: '#009688'}}
                />,
                <BottomNavigationItem
                    icon={'info'}
                    label={'Info'}
                    style={{backgroundColor: '#2196F3'}}
                />,
                <BottomNavigationItem
                    icon={'settings'}
                    label={'Settings'}
                    style={{backgroundColor: '#F44336'}}
                />, 
              ]}
          />
        </View>
      );
    }
}`;

const custom = `
class BottomTabs extends React.Component {
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
            style={{width: 672, height: 42, borderTopRightRadius: 6, borderTopLeftRadius: 6 }}
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
}`;

export default class BadgePage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'bottom-navigation-item'}
          title={'Bottom Navigation Item'}
          description={
            'Bottom Navigation Items represent the individual clickable tabs for Bottom Navigation bars.'
          }
          importCode={`import { BottomNavigationItem } from 'material-bread';`}
          componentDescription={`Passing in an object means you don't have to worry about the internal logic, however passing in the component directly gives you more granular control. Below is example utitilizing some useful props to control the component more directly.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            BottomNavigation,
            BottomNavigationItem,
            Badge,
          }}
          usageDescription={`Follow the instructions on your navigation package of choice for setting up bottom tabs with a custom component. Otherwise you can add onPress props to each tab to call your navigate function.`}
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/appbar-bottom#demos"
            id="demos">
            <ComponentDescription text="You can customize each item however you want or replace them completely." />
          </Section>

          <Section
            name="Badges"
            href="/components/appbar-bottom#badges"
            id="badges">
            <ComponentDescription text="Adding a key:value to the badgeProp will display a prop over the icon. See the Badge Component Page for more props." />
            <LiveEdit
              code={badges}
              scope={{ View, BottomNavigation, BottomNavigationItem, Badge }}
            />
          </Section>

          <Section
            name="Styled"
            href="/components/appbar-bottom#styled"
            id="styled">
            <ComponentDescription text="Styling the component directly can be done with the style prop." />
            <LiveEdit
              code={styled}
              scope={{ View, BottomNavigation, BottomNavigationItem }}
            />
          </Section>
          <Section
            name="Custom"
            href="/components/appbar-bottom#custom"
            id="custom">
            <ComponentDescription text="Adding children will replace all actionItems with the provided children, but still provide logic for for switching the active item." />
            <LiveEdit
              code={custom}
              scope={{
                View,
                BottomNavigation,
                BottomNavigationItem,
                Icon,
                Avatar,
                Image,
              }}
            />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
