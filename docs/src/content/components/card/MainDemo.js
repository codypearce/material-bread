import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Ripple,
} from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{maxWidth: 400, width: '100%'}}>
    <CardHeader
        thumbnail={
            <Avatar 
                type="image" 
                image={<Image source={{uri: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg'}} /> } 
                size={40}
            />
        }
        title={'Jon Snow'}
        subtitle={'Knows Nothing, KingofDaNorth'}
        action={<IconButton name="more-vert" size={24} />}
    />
    <CardMedia
        image={
            <Image
                style={{ flex: 1, width: '100%' }}
                source={{uri: 'https://i.redd.it/zj9vfr7uuljz.png'}}
                resizeMode="cover"
            />
        }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        Ran out of bleach for beard, but Daenerys says it looks cool.
      </Text>
    </CardContent>
    <CardActions
      rightActionItems={[
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
        Cards can be built using <CodeInline code="CardHeader" type="element" />
        , <CodeInline code="CardMedia" type="element" />,{' '}
        <CodeInline code="CardContent" type="element" />,
        <CodeInline code="CardActions" type="element" />, or custom components.
        Please see each Card Component page to learn how to use them.
      </div>
    }
    code={code}
    scope={{
      View,
      IconButton,
      Card,
      CardHeader,
      CardMedia,
      CardContent,
      CardActions,
      Avatar,
      Ripple,
      Image,
      Text,
    }}
  />
);
export default MainDemo;
