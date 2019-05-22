import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { List, ListItem, Caption, Icon } from '../../../../../../src/index';

export const code = `class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 2
    }
  }
  render() {
    return (
      <List style={{ maxWidth: 300 }}>
        <ListItem
          text={'Attractions'}
          icon={<Icon name={'local-movies'} size={24} />}
          onPress={() => this.setState({ selected: 1 })}
          selected={this.state.selected == 1}
        />
        <ListItem
          text={'Dining'}
          icon={<Icon name={'local-dining'} size={24} />}
          onPress={() => this.setState({ selected: 2 })}
          selected={this.state.selected == 2}
        />
        <ListItem
          text={'Education'}
          icon={<Icon name={'edit'} size={24} />}
          onPress={() => this.setState({ selected: 3 })}
          selected={this.state.selected == 3}
        />
      </List>   
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Selected'}
    sectionHref={`${pageHref}#selected`}
    sectionId={'selected'}
    code={code}
    scope={{ View, List, ListItem, Caption, Icon }}
  />
);
export default SubtitleDemo;
