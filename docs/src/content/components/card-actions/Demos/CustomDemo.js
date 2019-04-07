import React from 'react';
import { View, Text, Image } from 'react-native';
import { ComponentDemo } from '@components';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  IconButton,
} from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
<Card style={{maxWidth: 400, width: '100%'}}>
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
</View>
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Custom'}
    sectionHref={`${pageHref}#custom`}
    sectionId={'custom'}
    description={
      'You can pass arbitrary nodes to the array for each section to create something custom.'
    }
    code={code}
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
);
export default SubtitleDemo;
