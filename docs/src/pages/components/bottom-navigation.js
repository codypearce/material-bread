import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { BottomNavigation, BottomNavigationItem } from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import CodeInline from '../../components/CodeInline';
import propData from '../../content/components/bottom-navigation/propData';

const sections = [
  { name: 'Demos' },
  { name: 'labels', sub: true },
  { name: 'colored', sub: true },
];

const liveEditCode = `
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
                {icon: 'home', label: 'Home'},
                {icon: 'favorite', label: 'Favorite'},
                {icon: 'info', label: 'Info'},
                <BottomNavigationItem icon={'settings'} label={'Settings'} />, 
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
            backgroundColor={'white'}
            value={this.state.value}
            handleChange={(value) => this.handleChange(value)}
            actionItems={[
                {icon: 'home', label: 'Home', onPress={() => this.props.navigation.navigate('Home')}},
                {icon: 'favorite', label: 'Favorite',  onPress={() => this.props.navigation.navigate('Favorites')}},
                {icon: 'info', label: 'Info',  onPress={() => this.props.navigation.navigate('Info')}},
                <BottomNavigationItem icon={'settings'} label={'Settings'}  onPress={() => this.props.navigation.navigate('Settings')}/>, 
            ]}
        />
      );
    }
  }`;

const labels = `
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
              backgroundColor={'white'}
              value={this.state.value}
              handleChange={(value) => this.handleChange(value)}
              actionItems={[
                  {icon: 'home', label: 'Home'},
                  {icon: 'favorite', label: 'Favorite'},
                  {icon: 'info', label: 'Info'},
                  <BottomNavigationItem icon={'settings'} label={'Settings'} />, 
              ]}
          />
        </View>
      );
    }
}`;
const colored = `
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
              value={this.state.value}
              backgroundColor={'#673AB7'}
              handleChange={(value) => this.handleChange(value)}
              actionItems={[
                  {icon: 'home', label: 'Home'},
                  {icon: 'favorite', label: 'Favorite'},
                  {icon: 'info', label: 'Info'},
                  <BottomNavigationItem icon={'settings'} label={'Settings'} />, 
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
          componentName={'bottom-navigation'}
          title={'Bottom Navigation'}
          description={
            'Bottom navigation bars allow movement between primary destinations in an app.'
          }
          docsLink={
            'https://material.io/design/components/bottom-navigation.html#'
          }
          importCode={`import { BottomNavigation } from 'material-bread';`}
          componentDescription={
            <div>
              You can pass items either to the{' '}
              <CodeInline code="actionItem" type="prop" />
              's prop, or as <CodeInline code="children" type="prop" /> for more
              customization. If you pass both, the{' '}
              <CodeInline code="children" type="prop" /> elements will overwrite
              the <CodeInline code="actionItem" type="prop" /> elements. The
              active item is handled by passing in the{' '}
              <CodeInline code="index" type="value" /> of that item to{' '}
              <CodeInline
                code="Bottom
              Navigation"
                type="element"
              />{' '}
              and adding a <CodeInline code="handleChange" type="prop" />{' '}
              method.{' '}
              {`A simple example is shown below, more customization
              options can be seen in the demo's section.`}
            </div>
          }
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            BottomNavigation,
            BottomNavigationItem,
          }}
          usageDescription={
            <div>
              Follow the instructions on your navigation package of choice for
              setting up bottom tabs with a custom component. Otherwise you can
              add <CodeInline code="onPress" type="prop" /> props to each tab to
              call your navigate function.
            </div>
          }
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/bottom-navigation#demos"
            id="demos">
            <ComponentDescription
              text={
                <div>
                  Please see the{' '}
                  <CodeInline code="BottomNavigationItem" type="element" /> page
                  to learn how to customize each item more fully.
                </div>
              }
            />
          </Section>
          <Section
            name="Labels"
            href="/components/bottom-navigation#labels"
            id="labels">
            <ComponentDescription
              text={
                <div>
                  You can set all labels to show or set them individually on the
                  <CodeInline code="BottomNavigationItem" type="element" />{' '}
                  component.
                </div>
              }
            />
            <LiveEdit
              code={labels}
              scope={{ View, BottomNavigation, BottomNavigationItem }}
            />
          </Section>
          <Section
            name="Colored Background"
            href="/components/bottom-navigation#colored"
            id="colored">
            <ComponentDescription
              text={
                <div>
                  Changing the <CodeInline code="backgroundColor" type="prop" />{' '}
                  will change the icons to display as{' '}
                  <CodeInline code="white" type="value" />.
                </div>
              }
            />
            <LiveEdit
              code={colored}
              scope={{ View, BottomNavigation, BottomNavigationItem }}
            />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
