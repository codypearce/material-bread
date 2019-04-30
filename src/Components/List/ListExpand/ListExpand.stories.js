import React from 'react';

import { List, ListItem, ListExpand } from '../../../';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

export default storiesOf('Components|List/ListExpand', module)
  .addParameters({ jest: ['ListExpand'] })
  .add('simple', () => (
    <Container>
      <Header title={'Simple Text List Expand'} />

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
  ));
