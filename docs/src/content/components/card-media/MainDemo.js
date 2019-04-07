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
        title={'Top ten books'}
        subtitle={'by Cody'}
        image={
            <Image
                style={{ flex: 1, width: '100%' }}
                source={{uri: 'https://images.pexels.com/photos/34620/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}  
                resizeMode="cover"
            />
        }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        Books ranked with arbitrary bias, inconsistent logic, and strong opinions.
      </Text>
    </CardContent>
    <CardActions
      leftActionItems={[
        {name: 'Read',},
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
        CardMedia takes an <CodeInline code="image" type="prop" /> prop and fits
        it into a <CodeInline code="Card" type="element" />. Optional{' '}
        <CodeInline code="title" type="prop" /> and{' '}
        <CodeInline code="subtitle" type="prop" /> are shown in the bottom left
        corner of the <CodeInline code="image" type="prop" />.
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
