import React from 'react';
import { View, Image } from 'react-native';
import { ComponentDemo, CodeInline } from '@components';
import { Badge, Icon, IconButton, Button } from '../../../../../../src/index';

export const code = `class Page extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible: true,
      }
    }
    render() {
      return (
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
            <Badge size={14} content={4} visible={this.state.visible}>
                <Icon name="favorite" size={24} />
            </Badge>
            <Badge
                size={16}
                content={77}
                color={'red'}
                visible={this.state.visible}>
                <IconButton name="mail" size={32} />
            </Badge>
            <Badge size={8} position={'left'} visible={this.state.visible}>
                <IconButton name="message" size={32} color={'#8BC34A'} />
            </Badge>
            <Badge
                size={24}
                content={99}
                color={'black'}
                textColor={'#E91E63'}
                visible={this.state.visible}
            />
            </View>
            <Button
                text={'Toggle visibility'}
                onPress={() => this.setState({ visible: !this.state.visible })}
            />
        </View>
      );
    }
  }
`;

const DotDemo = pageHref => (
  <ComponentDemo
    sectionName={'Animated'}
    sectionHref={`${pageHref}#animated`}
    sectionId={'animated'}
    code={code}
    scope={{ View, Image, Badge, Icon, IconButton, Button }}
    description={
      <div>
        Toggle the <CodeInline code="visible" type="prop" /> prop an the badge
        with animate out and in.
      </div>
    }
  />
);
export default DotDemo;
