import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import {
  IconButton,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Badge,
} from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import CodeInline from '../../../components/CodeInline';
import propData from '../../../content/components/card-content/propData';
const sections = [{ name: 'Demos' }];

const liveEditCode = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{width: 400}}>
    <CardMedia
      image={
        <Image
          style={{ flex: 1, width: '100%' }}
          source={{uri: 'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
          resizeMode="cover"
        />
      }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 16, fontWeight: '600', marginBottom: 10 }}>
        Reasons dogs are the best:
      </Text>
      <View style={{marginLeft: 8}}>
        <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            - Man's best friend
        </Text>
        <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            - Some have jobs
        </Text>
        <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            - See image
        </Text>
      </View>
    </CardContent>
    <CardActions
        rightActionItems={[
            <Badge content={99}>
                <IconButton name="favorite" color={'#F44336'} size={24} />
            </Badge>,
            {name: 'share'} 
        ]}
    />
  </Card>
</View>`;

const usageCode = `import React, { Component } from 'react';
import { Card, CardContent, CardActions, } from 'material-bread';

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
        />
      </Card>
    );
  }
}`;

export default class CardContentPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'card-content'}
          title={'Card Content'}
          description={
            'Card content allows for arbitrary content to be shown in a card.'
          }
          importCode={`import { CardContent } from 'material-bread';`}
          componentDescription={
            <div>
              The CardContent component is meant for describing the main content
              of a card, usually that content is text of some kind, but it can
              be <CodeInline code="Images" type="element" />,{' '}
              <CodeInline code="Images" type="Avatars" />, or anything else.
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
            CardMedia,
            Image,
            Text,
            Badge,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section
            name="Demos"
            href="/components/card-content#demos"
            id="demos">
            <ComponentDescription text="More Demos can be seen on the other card component pages." />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
