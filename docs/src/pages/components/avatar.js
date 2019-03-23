import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import { Avatar } from '../../../../src/index';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import CodeInline from '../../components/CodeInline';
import propData from '../../content/components/avatar/propData';

const sections = [
  { name: 'Demos' },
  { name: 'icons', sub: true },
  { name: 'text', sub: true },
  { name: 'custom', sub: true },
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
            <div>
              Avatars can be images, letters, or icons. First provide the{' '}
              <CodeInline code="type" type="prop" />
              of avatar, then either provide the{' '}
              <CodeInline code="content" type="prop" /> prop for icons and
              letters or <CodeInline code="image" type="prop" /> prop for
              images. A simple image example is shown below.
            </div>
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
            <ComponentDescription text="" />
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
            <ComponentDescription
              text={
                <div>
                  You can style any part or add{' '}
                  <CodeInline code="children" type={'prop'} /> to replace all
                  the inner content to create something more custom.
                </div>
              }
            />
            <LiveEdit code={custom} scope={{ Avatar }} />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
