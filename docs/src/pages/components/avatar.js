import React, { Component } from 'react';
import { View, Image } from 'react-native';
import createPropData from '../../utils/createPropData';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Avatar } from '../../../../src/index';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';

const sections = [
  { name: 'Demos' },
  { name: 'icons', sub: true },
  { name: 'text', sub: true },
  { name: 'custom', sub: true },
];

const propData = [
  createPropData(
    'color',
    'Background color for avatar, applies to text and icon',
    'string',
    'primary',
  ),
  createPropData(
    'content',
    'Name of icon or string to be rendered',
    'string',
    '',
  ),
  createPropData('contentColor', 'Color of icon or text', 'string', 'white'),
  createPropData(
    'contentSize',
    'Custom size that is not relative to avatar',
    'number',
    '',
  ),
  createPropData('contentStyles', 'Styles applied to content', 'object', ''),

  createPropData('image', 'Display image element as avatar', 'node', ''),

  createPropData('onPress', 'Onpress callback', 'func', ''),
  createPropData(
    'ripple',
    'enables ripple if onPress is provided',
    'bool',
    'false',
  ),
  createPropData(
    'size',
    'Size of avatar, content scales with size',
    'number',
    '24',
  ),

  createPropData(
    'type',
    'Indicates which type of avatar',
    'string: image, icon, text',
    '',
  ),

  createPropData('style', 'Styles root element', 'object', ''),
];

const liveEditCode = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Avatar 
        type="image" 
        image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
        size={64} 
    />
    <Avatar 
        type="image" 
        image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
        size={48} 
        onPress={() => console.log('avatar')}
        ripple
    />
    <Avatar 
        type="image" 
        image={<Image source={{uri: 'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4'}} /> } 
    /> 
</View>`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Avatar } from 'material-bread';

export default class UserAvatar extends Component {
  render() {
    return (
        <Avatar 
            type="icon"
            content="face"
            contentColor={'white'}
        />
    );
  }
}`;

const icons = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Avatar
        type="icon"
        content="face"
        contentColor={'white'}
        size={64}
        color={'#42a5f5'}
    />
    <Avatar
        type="icon"
        content="alarm"
        size={48}
        color={'#c2185b'}
    />
    <Avatar
        type="icon"
        content="arrow-back"
        contentColor={'#c2185b'}
        color={'#f4511e'}
    />
</View>`;

const text = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Avatar
        type="text"
        content="CP"
        contentColor={'white'}
        size={64}
        color={'#42a5f5'}
    />
    <Avatar
        type="text"
        content="MB"
        size={48}
        color={'#c2185b'}
    />
    <Avatar
        type="text"
        content="NP"
        contentColor={'#c2185b'}
        color={'#f4511e'}
    />
</View>`;

const custom = `<Avatar 
    style={{borderRadius: 10}}
    size={40}
    type={'icon'}
    content={'face'}
/>`;

export default class AvatarPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'avatar'}
          title={'Avatar'}
          description={
            'Avatars are used to represent the user, other users, or contextual icons.'
          }
          componentDescription={
            'Avatars can be images, letters, or icons. First provide the type of avatar, then either provide the value to display. A simple image example is shown below.'
          }
          importCode={`import { Avatar } from 'material-bread';`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{ Avatar, Image, View }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/avatar#demos" id="demos">
            <ComponentDescription text="" />
          </Section>

          <Section
            name={'Avatar Icons'}
            href="/components/avatar#icons"
            id="icons">
            <ComponentDescription text="Icons are from Material Icons" />
            <LiveEdit code={icons} scope={{ Avatar, View }} />
          </Section>

          <Section
            name={'Avatar Text'}
            href="/components/avatar#text"
            id="text">
            <ComponentDescription text="Text is usually two letters for a person's initial, but it can be anything you want." />
            <LiveEdit code={text} scope={{ Avatar, View }} />
          </Section>

          <Section name="Custom" href="/components/avatar#custom" id="custom">
            <ComponentDescription text="You can style any part or add children to replace all the inner content to create something more custom." />
            <LiveEdit code={custom} scope={{ Avatar }} />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
