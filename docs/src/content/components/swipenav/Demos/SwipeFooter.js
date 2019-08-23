import React from 'react';
import { View, Text, Platform } from 'react-native';
import { ComponentDemo } from '@components';
import {
  SwipeNav,
  BottomNavigation,
  Card,
  CardContent,
} from '../../../../../../src/index';

const SimpleCard = ({ hours, title, description }) => {
  return (
    <Card
      shadow={3}
      style={{ maxWidth: 500, width: '100%', marginBottom: 6, marginTop: 6 }}>
      <CardContent>
        <Text
          style={{ color: 'rgba(0,0,0,.6)', fontSize: 14, marginBottom: 6 }}>
          {hours}
        </Text>
        <Text
          style={{ color: 'rgba(0,0,0,1)', fontSize: 16, marginBottom: 10 }}>
          {title}
        </Text>
        <Text style={{ color: 'rgba(0,0,0,.8)', fontSize: 14 }}>
          {description}
        </Text>
      </CardContent>
    </Card>
  );
};

const BodyContent = () => {
  return (
    <View
      style={{
        backgroundColor: 'salmon',
        paddingLeft: 8,
        paddingRight: 8,
      }}>
      <SimpleCard
        hours={'2 hours ago'}
        title={'Woman Opens Two Chrome Tabs'}
        description={
          'After downloading 128GB of RAM on her custom desktop, Karen was able to open two Chrome tabs at the same time which experts have called "Revolutionary"'
        }
      />
      <SimpleCard
        hours={'3 hours ago'}
        title={'Local developer wastes time'}
        description={
          'A local develop wastes his Sunday writing placeholder text for a demo instead of going outside'
        }
      />
      <SimpleCard
        hours={'4 hours ago'}
        title={'Bitcoin dead again'}
        description={
          'Bitcoin has died yet again after falling .2% in 1 hour says leading economist.'
        }
      />
      <SimpleCard
        hours={'6 hours ago'}
        title={'Bitcoin going to the moon'}
        description={
          'Bitcoin has risen 11.4% in the last 5 minutes which has some experts predicating the start of the next bull run'
        }
      />

      <SimpleCard
        hours={'8 hours ago'}
        title={'U.S Tech Startups rebound'}
        description={
          'Favorable Business Conditions have allowed startups to secure more fundraising deals compared to last year.'
        }
      />
      <SimpleCard
        hours={'9 hours ago'}
        title={"Asia's clean energy initiatives"}
        description={
          'China Plans to invest billions of dollars for the development of over 300 clean energy projects in SouthEast Asia'
        }
      />
      <SimpleCard
        hours={'10 hours ago'}
        title={'Copper on the rise'}
        description={
          'Copper prices soar admid global market optimism and increasing demand'
        }
      />
      <SimpleCard
        hours={'11 hours ago'}
        title={'Poverty to Empowerment in Chicago'}
        description={
          'How one woman is transforming the lives of underpriveledged children.'
        }
      />
    </View>
  );
};

export const code = `class Demo extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View style={{ height: '100%', maxWidth: 500, overflowY: 'hidden' }}>
          <SwipeNav
            footer={
            <BottomNavigation
                style={{ maxWidth: 672, width: '100%' }}
                value={true}
                showLabels
                actionItems={[
                { label: 'Buy' },
                { label: 'Sell' },
                { label: 'Settings' },
                ]}
            />
            }
            scrollViewStyle={{
                height: 400,
                overflow: 'hidden',
            }}>
           <BodyContent />
          </SwipeNav>
        </View>
      );
    }
  }`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Swipe Footer'}
    sectionHref={`${pageHref}#footer`}
    sectionId={'footer'}
    code={code}
    scope={{
      View,
      SwipeNav,
      BottomNavigation,
      Card,
      CardContent,
      Text,
      Platform,
      SimpleCard,
      BodyContent,
    }}
  />
);
export default SubtitleDemo;
