import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import {
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Ripple,
} from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
  <Card style={{maxWidth: 300, width: '100%', marginRight: 24}} onPress={() => console.log('clicked gorilla')}>
    <CardMedia
      image={
        <Image
          style={{ flex: 1, width: '100%' }}
          source={{uri: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
          resizeMode="cover"
        />
      }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 16, fontWeight: '600', marginBottom: 6 }}>
        Gorilla
      </Text>
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa.
      </Text>
    </CardContent>
  </Card>

  <Card style={{maxWidth: 300, width: '100%'}} onPress={() => console.log('clicked dog')}>
    <CardMedia
      image={
        <Image
          style={{ flex: 1, width: '100%' }}
          source={{uri: 'https://images.pexels.com/photos/955463/pexels-photo-955463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=800'}}
          resizeMode="cover"
        />
      }
    />
    <CardContent >
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 16, fontWeight: '600', marginBottom: 6 }}>
        Dog
      </Text>
      <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
        The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.
      </Text>
    </CardContent>
  </Card>
</View>
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Clickable'}
    sectionHref={`${pageHref}#clickable`}
    sectionId={'clickable'}
    description={
      <div>
        Adding <CodeInline code="onPress" type="prop" /> will make the entire
        card clickable, useful when cards act as links or actions.
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
      Image,
      Text,
      Ripple,
    }}
  />
);
export default SubtitleDemo;
