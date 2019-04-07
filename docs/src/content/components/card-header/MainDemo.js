import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  IconButton,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardHeader,
  Avatar,
} from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{maxWidth: 400, width: '100%'}}>
    <CardHeader
        thumbnail={
            <Avatar 
                type="image" 
                image={<Image source={{uri: 'http://assets1.ignimgs.com/2014/04/07/marioignpng-e324a5_1280w.png'}} /> } 
                size={40}
            />
        }
        title={'Mario'}
        subtitle={'Hero. Plumber. Brother.'}
        action={<IconButton name="more-vert" size={24} />}
    />
    <CardMedia
        image={
            <Image
                style={{ flex: 1, width: '100%' }}
                source={{uri: 'https://i.redd.it/tr8wgp1ysulz.png'}}
                resizeMode="cover"
            />
        }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        Movember is over. 
      </Text>
    </CardContent>
    <CardActions
      rightActionItems={[
        {name: 'reply',},
        {name: 'thumb-up',},
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
        The CardHeader component is built of{' '}
        <CodeInline code="title" type="prop" />,{' '}
        <CodeInline code="subheader" type="prop" />,{' '}
        <CodeInline code="thumbnail" type="prop" />, and
        <CodeInline code="action" type="prop" />. Any can be added or omitted.{' '}
        <CodeInline code="children" type="prop" /> will replace both{' '}
        <CodeInline code="title" type="prop" /> and{' '}
        <CodeInline code="subheader" type="prop" /> and will show between{' '}
        <CodeInline code="thumbnail" type="prop" /> and
        <CodeInline code="action" type="prop" /> if provided.
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
      CardHeader,
      Avatar,
      Image,
      Text,
    }}
  />
);
export default MainDemo;
