import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentMainDemo, CodeInline } from '@components';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Badge,
} from '../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Card style={{maxWidth: 400, width: '100%'}}>
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

const MainDemo = pageHref => (
  <ComponentMainDemo
    pageHref={pageHref}
    description={
      <div>
        The CardContent component is meant for describing the main content of a
        card, usually that content is text of some kind, but it can be{' '}
        <CodeInline code="Images" type="element" />,{' '}
        <CodeInline code="Images" type="Avatars" />, or anything else.
      </div>
    }
    code={code}
    scope={{
      IconButton,
      View,
      Card,
      CardContent,
      CardActions,
      CardMedia,
      Badge,
      Image,
      Text,
    }}
  />
);
export default MainDemo;
