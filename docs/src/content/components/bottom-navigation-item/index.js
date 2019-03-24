import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import {
  BottomNavigation,
  BottomNavigationItem,
  Icon,
  Avatar,
  Badge,
} from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../../components/LiveEdit/LiveEdit';
import CodeInline from '../../../components/CodeInline';
import Link from '../../../components/Link';
import propData from '../../../content/components/bottom-navigation-item/propData';

const sections = [
  { name: 'Demos' },
  { name: 'badges', sub: true },
  { name: 'styled', sub: true },
  { name: 'custom', sub: true },
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
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/bottom-navigation-item#demos"
            id="demos"
          />

          <Section
            name="Badges"
            href="/components/bottom-navigation-item#badges"
            id="badges">
            <ComponentDescription
              text={
                <div>
                  Adding values to the{' '}
                  <CodeInline code="badgeProp" type="prop" /> will display a
                  prop over the icon. See the{' '}
                  <Link href="/components/badge/">Badge</Link> component page
                  for more props.
                </div>
              }
            />
            <LiveEdit
              code={badges}
              scope={{ View, BottomNavigation, BottomNavigationItem, Badge }}
            />
          </Section>

          <Section
            name="Styled"
            href="/components/bottom-navigation-item#styled"
            id="styled">
            <ComponentDescription text="" />
            <LiveEdit
              code={styled}
              scope={{ View, BottomNavigation, BottomNavigationItem }}
            />
          </Section>
          <Section
            name="Custom"
            href="/components/bottom-navigation-item#custom"
            id="custom">
            <ComponentDescription
              text={
                <div>
                  Adding <CodeInline code="children" type="prop" /> will replace
                  all <CodeInline code="actionItems" type="prop" />, but still
                  provide logic for for switching the active item.
                </div>
              }
            />
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
