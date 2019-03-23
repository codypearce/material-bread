import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  IconButton,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from '../../../../src/index';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import CodeInline from '../../components/CodeInline';
import propData from '../../content/components/card-actions/propData';

const sections = [{ name: 'Demos' }, { name: 'custom', sub: true }];

const liveEditCode = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{width: 400}}>
    <CardMedia
        image={
            <Image
            style={{ flex: 1, width: '100%' }}
            source={{uri: 'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
            resizeMode="cover"
            />
        }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        Fact: dogs make everything better
      </Text>
    </CardContent>
    <CardActions
      leftActionItems={[
        {name: 'share',},
        {name: 'learn more'}
      ]}
      rightActionItems={[
        {name: 'favorite',},
        {name: 'share'} 
      ]}
    />
  </Card>
</View>`;

const usageCode = `import React, { Component } from 'react';
import { Card,CardContent, CardActions, } from 'material-bread';

export default class FullCard extends Component {
  render() {
    return (
      <Card>
        <CardContent >
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            This is some test card content, though it can anything.
          </Text>
        </CardContent>
        <CardActions
          leftActionItems={[
            {name: 'share',},
            {name: 'learn more'}
          ]}
          rightActionItems={[
            {name: 'favorite',},
            {name: 'share'} 
          ]}
        />
      </Card>
    );
  }
}`;

const custom = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{width: 400}}>
    <CardMedia
        image={
            <Image
            style={{ flex: 1, width: '100%' }}
            source={{uri: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
            resizeMode="cover"
            />
        }
    />
    <CardActions
      leftActionItems={[
        <IconButton name="bookmark-border" size={30} color={'#673AB7'} />
      ]}
      rightActionItems={[
        <Button text={'Read more'} type="outlined" textColor={'#009688'} style={{marginRight: 8}} dense/>,
        <Button text={'Buy'} type="flat"  dense/>
      ]}
    />
  </Card>
</View>`;

export default class CardPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'card-actions'}
          title={'Card Actions'}
          description={
            'Card action buttons displayed at the bottom of most the cards'
          }
          importCode={`import { CardActions } from 'material-bread';`}
          componentDescription={
            <div>
              CardActions are split into{' '}
              <CodeInline code="leftActionItems" type="prop" /> and{' '}
              <CodeInline code="rightActionItems" type="prop" />. Left action
              items display as full text{' '}
              <CodeInline code="Button" type="element" />
              s, right action items display as
              <CodeInline code="IconButton" type="element" />
              s. Both can be passed either as objects or nodes.
            </div>
          }
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            IconButton,
            View,
            Card,
            CardContent,
            CardActions,
            Text,
            CardMedia,
            Image,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/card-actions#demos"
            id="demos">
            <ComponentDescription text="" />
          </Section>
          <Section
            name="Custom"
            href="/components/card-actions#custom"
            id="custom">
            <ComponentDescription text="You can pass arbitrary nodes to the array for each section to create something custom." />
            <LiveEdit
              code={custom}
              scope={{
                IconButton,
                View,
                Card,
                CardContent,
                CardActions,
                CardMedia,
                Image,
                Button,
                Text,
              }}
            />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
