import React from 'react';
import { View } from 'react-native';
import { ComponentDemo, CodeInline, Link } from '@components';
import {
  BottomNavigation,
  BottomNavigationItem,
} from '../../../../../../src/index';

export const code = `class BottomTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChange(value) {
      this.setState({value});
  }
 
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <BottomNavigation 
            style={{  maxWidth: 672, width: '100%' }}
            backgroundColor={'white'}
            value={this.state.value}
            handleChange={(value) => this.handleChange(value)}
            actionItems={[
                <BottomNavigationItem icon={'home'} label={'Home'} />,
                <BottomNavigationItem icon={'favorite'} label={'Favorite'} badgeProps={{
                  size: 7, color: 'red', right: 1, top: 2
                }} />,
                <BottomNavigationItem icon={'info'} label={'Info'} />,
                <BottomNavigationItem
                    icon={'settings'}
                    label={'Settings'}
                    badgeProps={{
                        content: 72, size: 14, color: 'red',
                    }}
                />, 
            ]}
        />
      </View>
    );
  }
}`;

const BadgeDemo = pageHref => (
  <ComponentDemo
    sectionName={'Badges'}
    sectionHref={`${pageHref}#badges`}
    sectionId={'badges'}
    description={
      <div>
        Adding values to the <CodeInline code="badgeProp" type="prop" /> will
        display a prop over the icon. See the{' '}
        <Link href="/components/badge/">Badge</Link> component page for more
        props.
      </div>
    }
    code={code}
    livePreviewBackground={'#f7f7f7'}
    scope={{ View, BottomNavigation, BottomNavigationItem }}
  />
);
export default BadgeDemo;
