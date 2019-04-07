import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  IconButton,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{maxWidth: 400, width: '100%'}}>
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

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        CardActions are split into{' '}
        <CodeInline code="leftActionItems" type="prop" /> and{' '}
        <CodeInline code="rightActionItems" type="prop" />. Left action items
        display as full text <CodeInline code="Button" type="element" />
        s, right action items display as
        <CodeInline code="IconButton" type="element" />
        s. Both can be passed either as objects or nodes.
      </div>
    }
    code={code}
    scope={{
      View,
      IconButton,
      Card,
      CardContent,
      CardActions,
      CardMedia,
      Image,
      Text,
    }}
  />
);
export default MainDemo;
