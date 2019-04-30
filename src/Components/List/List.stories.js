import React from 'react';

import { List, ListItem, ListExpanded } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|List', module)
  .addParameters({ jest: ['List'] })
  .add('Text List', () => (
    <Container>
      <Header title={'TextList'} />

      <List style={{ width: 400 }}>
        <ListItem text={'Attractions'} />
        <ListItem text={'Dining'} />
        <ListItem text={'Education'} />
        <ListItem text={'Health'} />
        <ListItem text={'Family'} />
        <ListItem text={'Office'} />
        <ListItem text={'Promotions'} />
      </List>
    </Container>
  ));
