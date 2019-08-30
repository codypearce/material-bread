import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentDemo } from '@components';
import {
  Card,
  CardHeader,
  IconButton,
  Avatar,
  CardContent,
} from '../../../../../../src/index';

export const code = `<Card
    style={{ maxWidth: 400, width: '100%',  }}
    radius={1}
    shadow={4}>
    <CardHeader
        subtitle={'Mario - 25 mins ago'}
        style={{
            alignItems: 'center',
            borderBottom: 'none',
            paddingBottom: 0,
        }}
        action={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton name="star" size={24} color={'rgba(0,0,0,.47)'} />
            <IconButton name="delete" size={24} color={'rgba(0,0,0,.47)'} />
            <IconButton
                name="more-vert"
                size={24}
                color={'rgba(0,0,0,.47)'}
            />
            <Avatar
                type="image"
                image={
                <Image
                    source={{
                    uri:
                        'http://assets1.ignimgs.com/2014/04/07/marioignpng-e324a5_1280w.png',
                    }}
                />
                }
                size={40}
            />
            </View>
        }>
        <Text>Mario - 25 mins ago</Text>
    </CardHeader>

    <CardContent style={{ paddingTop: 4, paddingBottom: 16 }}>
        <Text
            style={{ color: 'rgba(0,0,0,1)', fontSize: 18, marginBottom: 4 }}>
            Where is the Princess?
        </Text>
        <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            I've defeated Bowser in 6 castles and still no Prin...
        </Text>
    </CardContent>
</Card>
`;

const IconDemo = pageHref => (
  <ComponentDemo
    sectionName={'More Actions'}
    sectionHref={`${pageHref}#more-actions`}
    sectionId={'more-actions'}
    code={code}
    scope={{
      View,
      Image,
      Text,
      Card,
      CardHeader,
      IconButton,
      Avatar,
      CardContent,
    }}
  />
);
export default IconDemo;
