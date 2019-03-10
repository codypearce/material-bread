import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  Appbar,
  IconButton,
  Button,
  Badge,
  SearchField,
  Searchbar,
} from '../../../../src/index';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [
  { name: 'Demos' },
  { name: 'with image', sub: true },
  { name: 'with search', sub: true },
  { name: 'search bar', sub: true },
  { name: 'with subtitle', sub: true },
  { name: 'custom', sub: true },
];

const propData = [
  createPropData(
    'actionItems',
    'Each can be an object or node, renders on the right',
    'array',
    '',
  ),
  createPropData(
    'barType',
    `Type of appbar, other components change based on type`,
    'string: regular, prominent, dense, prominent dense',
    'regular',
  ),

  createPropData(
    'backgroundImage',
    `Renders image element as background`,
    'node',
    '',
  ),

  createPropData(
    'color',
    `Component's theme color`,
    'string: primary, secondary, dark, white',
    'Theme.primaryColor',
  ),
  createPropData(
    'onNavigation',
    'OnPress for navigationType IconButton if provided.',
    'func',
    '',
  ),
  createPropData(
    'onTitle',
    'OnPress for title string if provided.',
    'func',
    '',
  ),
  createPropData(
    'navigationIcon',
    'Replaces navigationTyp element and renders on the far left before Title',
    'node',
    '',
  ),
  createPropData(
    'navigationType',
    'Name of IconButton, renders on the far left before Title.',
    'string',
    '',
  ),

  createPropData(
    'position',
    'CSS position values applied to root appbar',
    'string: fixed, relative, absolute',
    'relative',
  ),
  createPropData(
    'subtitle',
    'Only displays on barType prominent, under the Title',
    'string',
    '',
  ),
  createPropData('subtitleStyles', 'Styles Subtitle', 'object', ''),
  createPropData(
    'title',
    'Displays on the left after navigation. If string it follows guidelines',
    'string || node',
    '',
  ),
  createPropData(
    'titleStyles',
    'Styles title if provided as string',
    'object',
    '',
  ),
  createPropData('style', 'Styles root element', 'object', ''),
];

const liveEditCode = ` <Appbar
  barType={"normal"}
  title={'Page Title'} 
  navigationType={'menu'}
  onNavigation={() => console.log('onNavigation!')}
  actionItems={[
    <Badge
      style={{ position: 'absolute', top: 0, right: 0}}
      containerStyle={{marginRight: 16}}
      backgroundColor={'#e10050'}
      size={14}
      badgeContent={77}>
      <IconButton name="favorite" size={24} color={'white'} />
    </Badge>,
     
    {name: 'search', onPress: () => console.log('onSearch')},
    {name: 'more-vert'},

  ]}
/>`;

const usageCode = `import React  from 'react';
import { View } from 'react-native';
import { Appbar } from 'material-bread';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Appbar title={'Page Title'} />
      <View>
    );
  }
}`;

const withSubtitle = ` <Appbar
  barType={'prominent'}
  title={'Page Title'} 
  subtitle={'Subtitle'}
  navigationType={'menu'}
  actionItems={[
    {name: 'favorite'},
    {name: 'search', onPress: () => console.log('onSearch')},
    <IconButton name="more-vert" size={24} color={'white'} />, 
  ]}
/>`;

const withImage = ` <Appbar
  barType={'prominent'}
  title={'Page Title'} 
  backgroundImage={<Image  source={{uri: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} />}
  navigationType={'close'}
  actionItems={[
    {name: 'favorite'},
    {name: 'search', onPress: () => console.log('onSearch')},
    <IconButton name="more-vert" size={24} color={'white'} />, 
  ]}
/>`;

const withSearchField = ` 
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isSearching: false,
      value: ''
    };
  }

  render() {
    return (
      <Appbar
        title={'Page Title'} 
        navigationType={'menu'}
        actionItems={[
          <SearchField 
            style={{
              marginHorizontal: 24, 
              flex: this.state.isSearching ? 1 : 'auto'
            }}
            primary
            value={this.state.value}
            onChangeText={(value) => this.setState({value})}
            onFocus={() => this.setState({isSearching: true})}
            onBlur={() => this.setState({isSearching: false})}
            onCloseIcon={() => this.setState({value: ''})}
          />,

          {name: 'favorite'},
          <IconButton name="more-vert" size={24} color={'white'} />, 
        ]}
        navigationType={'close'}
      />
    );
  }
}`;

const withSearchBar = ` 
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      isSearching: true
    };
  }

  render() {
    return (
      <Appbar
        title={'Page Title'} 
        navigationType={'menu'}
        actionItems={[ 
          {name: 'search', onPress: () => this.setState({isSearching: true})},
          {name: 'favorite'},
          <IconButton name="more-vert" size={24} color={'white'} />, 
        ]}
        style={{paddingHorizontal: this.state.isSearching ? 0 : 16}}
      >
      {this.state.isSearching ?  
        <Searchbar
          style={{height: 56, width: '100%', paddingHorizontal: 16}}
          value={this.state.value}
          onChangeText={(value) => this.setState({value})}
          onNavigation={() => this.setState({isSearching: false})}
          onCloseIcon={() => this.setState({value: ''})}
        /> : null}
      </Appbar>
    );
  }
}`;

const custom = `const styles = {
  appbar: {
    alignItems: 'center', 
    justifyContent:'space-between', 
    height: 60, 
    paddingVertical: 0, 
    backgroundColor: 'black'
  },
  left: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'flex-start',
  },
  button: {
    height: 30, 
    alignSelf: 'center', 
    marginRight: 16
  },
}

render(
<Appbar style={styles.appbar}>
  <View style={styles.left}>
    <Button textColor="white" style={styles.button} >Home</Button>
    <Button textColor="white" style={styles.button} >Install</Button>
    <Button textColor="white" style={styles.button}>Docs</Button>
    <Button textColor="white" style={[styles.button, {marginRight: 0}]}>About</Button>
  </View>
  <Button type={'contained'} textColor="white" style={[styles.button, {marginRight: 0}]} >Buy</Button>
</Appbar>
)`;

export default class AppbarPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'appbar'}
          title={'Appbar Top'}
          description={
            'The top app bar displays information and actions relating to the current screen.'
          }
          componentDescription={`Appbars are essentially broken into three parts: navigation, title, and action buttons. Our API abstracts away each component to both ensure all parts match material and provide more prebuilt cobminations for free. But if you need more customization you can replace any component, or all of them. Below is a simple live example you can edit, see demos section for more examples. Try changing "barType" to "prominent" to see how the component changes.`}
          docsLink={'https://material.io/design/components/app-bars-top.html'}
          sideScrollMenuItems={sections}
          importCode={`import { Appbar } from 'material-bread';`}
          liveEditCode={liveEditCode}
          liveEditScope={{ Appbar, IconButton, Image, Badge }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/appbar#demos" id="demos">
            <ComponentDescription text="Below are demos of various features and common patterns. You can see even more examples in the Storybook playground." />
          </Section>

          <Section
            name="With image"
            href="/components/appbar#with-image"
            id="with-image">
            <ComponentDescription text="You must pass in an <Image> component, please read the React Native docs on Images to get a better idea of how to pass in images. Generally they are only used for prominent bars, but can be used on other types." />
            <LiveEdit code={withImage} scope={{ Appbar, IconButton, Image }} />
          </Section>

          <Section
            name="With search field"
            href="/components/appbar#with-search"
            id="with-search">
            <ComponentDescription text="You can add a search field or any other component directly in the appbar shown below." />
            <LiveEdit
              code={withSearchField}
              scope={{ Appbar, IconButton, SearchField }}
            />
          </Section>

          <Section
            name="Full Search bar"
            href="/components/appbar#search-bar"
            id="search-bard">
            <ComponentDescription text="The ability to replace components provides many ways to create contextual app bars. The following demonstrates how one might set up a full search bar. Click the back button to return to a regular appbar, click the search icon to open the contextual search appbar." />
            <LiveEdit
              code={withSearchBar}
              scope={{ Appbar, IconButton, Searchbar }}
            />
          </Section>

          <Section
            name="With Subtitle"
            href="/components/appbar#with-subtitle"
            id="with-subtitle">
            <ComponentDescription text="Subtitles can be used on normal and prominent barTypes, but not dense. Try changing 'barType' to 'normal' to see how it will display" />
            <LiveEdit code={withSubtitle} scope={{ Appbar, IconButton }} />
          </Section>

          <Section name="Custom" href="/components/appbar#custom" id="custom">
            <ComponentDescription text="Adding children will replace all internal components with the provided components. This allows for full customization of the appbar." />
            <LiveEdit
              noInline
              code={custom}
              scope={{ Appbar, IconButton, Text, Button, View }}
            />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
