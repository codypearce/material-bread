import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { List, ListItem, ListSection, Icon } from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <List style={{ maxWidth: 300 }}>
        <ListSection inset bottomDivider>
          <ListItem
            text={'Attractions'}
            icon={<Icon name={'local-movies'} size={24} />}
          />
          <ListItem
            text={'Dining'}
            icon={<Icon name={'local-dining'} size={24} />}
          />
        </ListSection>
        <ListSection inset bottomDivider>
          <ListItem
            text={'Health'}
            icon={<Icon name={'favorite'} size={24} />}
          />
          <ListItem text={'Family'} icon={<Icon name={'group'} size={24} />} />
        </ListSection>
        <ListSection inset>
          <ListItem
            text={'Education'}
            icon={<Icon name={'edit'} size={24} />}
          />
          <ListItem
            text={'Office'}
            icon={<Icon name={'content-cut'} size={24} />}
          />
          <ListItem
            text={'Promotions'}
            icon={<Icon name={'loyalty'} size={24} />}
          />
        </ListSection>
      </List>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Inset Divider'}
    sectionHref={`${pageHref}#inset`}
    sectionId={'inset'}
    code={code}
    scope={{ View, List, ListItem, ListSection, Icon }}
  />
);
export default SubtitleDemo;
