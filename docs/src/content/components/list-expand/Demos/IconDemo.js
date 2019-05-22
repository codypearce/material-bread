import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { List, ListItem, ListExpand, Icon } from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <List style={{ maxWidth: 300 }}>
            <ListExpand
                title={'Attractions'}
                icon={<Icon name={'local-movies'} size={24} />}
            >
                <ListItem text={'Movies'} />
                <ListItem text={'Bowling'} />
                <ListItem text={'Fairgrounds'} />
            </ListExpand>
            <ListExpand
                title={'Dining'}
                icon={<Icon name={'local-dining'} size={24} />}
            >
                <ListItem text={'Pizz Hut'} />
                <ListItem text={'Taco bell'} />
                <ListItem text={'Sonics'} />
            </ListExpand>
            <ListExpand
                title={'Education'}
                icon={<Icon name={'edit'} size={24} />}
            >
                <ListItem text={'Basket Weaving'} />
                <ListItem text={'Cooking'} />
                <ListItem text={'Economics'} />
            </ListExpand>
        </List>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Icon'}
    sectionHref={`${pageHref}#icon`}
    sectionId={'icon'}
    code={code}
    scope={{ View, List, ListItem, ListExpand, Icon }}
  />
);
export default SubtitleDemo;
