import React from 'react';

import { List, ListItem, ListExpand, Icon } from '../../../';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

export default storiesOf('Components|List/ListExpand', module)
  .addParameters({ jest: ['ListExpand'] })
  .add('simple', () => (
    <Container>
      <Header title={'Text List Expand'} />

      <List style={{ width: 300 }}>
        <ListExpand title={'Events'}>
          <ListItem text={'Attractions'} />
          <ListItem text={'Dining'} />
          <ListItem text={'Education'} />
          <ListItem text={'Health'} />
          <ListItem text={'Family'} />
          <ListItem text={'Office'} />
          <ListItem text={'Promotions'} />
        </ListExpand>
      </List>
    </Container>
  ))
  .add('with icon', () => (
    <Container>
      <Header title={'Icon List Expand'} />

      <List style={{ width: 300 }}>
        <ListExpand
          title={'Attractions'}
          icon={<Icon name={'local-movies'} size={24} />}>
          <ListItem text={'Movies'} />
          <ListItem text={'Bowling'} />
          <ListItem text={'Fairgrounds'} />
        </ListExpand>
        <ListExpand
          title={'Dining'}
          icon={<Icon name={'local-dining'} size={24} />}>
          <ListItem text={'Pizz Hut'} />
          <ListItem text={'Taco bell'} />
          <ListItem text={'Sonics'} />
        </ListExpand>
        <ListExpand title={'Education'} icon={<Icon name={'edit'} size={24} />}>
          <ListItem text={'Basket Weaving'} />
          <ListItem text={'Cooking'} />
          <ListItem text={'Economics'} />
        </ListExpand>
      </List>
    </Container>
  ));
