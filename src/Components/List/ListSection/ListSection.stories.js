import React from 'react';

import { List, ListItem, Icon, ListSection } from '../../../';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

export default storiesOf('Components|List/ListSection', module)
  .addParameters({ jest: ['ListSection'] })
  .add('with label', () => (
    <Container>
      <Header title={'Label List'} />

      <List style={{ width: 300 }}>
        <ListSection label={'Entertainment'}>
          <ListItem
            text={'Attractions'}
            icon={<Icon name={'local-movies'} size={24} />}
          />
          <ListItem
            text={'Dining'}
            icon={<Icon name={'local-dining'} size={24} />}
          />
        </ListSection>
        <ListSection label={'Home'}>
          <ListItem
            text={'Health'}
            icon={<Icon name={'favorite'} size={24} />}
          />
          <ListItem text={'Family'} icon={<Icon name={'group'} size={24} />} />
        </ListSection>
        <ListSection label={'Job'}>
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
    </Container>
  ))
  .add('with divider', () => (
    <Container>
      <Header title={'Label List'} />

      <List style={{ width: 300 }}>
        <ListSection bottomDivider>
          <ListItem
            text={'Attractions'}
            icon={<Icon name={'local-movies'} size={24} />}
          />
          <ListItem
            text={'Dining'}
            icon={<Icon name={'local-dining'} size={24} />}
          />
        </ListSection>
        <ListSection bottomDivider>
          <ListItem
            text={'Health'}
            icon={<Icon name={'favorite'} size={24} />}
          />
          <ListItem text={'Family'} icon={<Icon name={'group'} size={24} />} />
        </ListSection>
        <ListSection>
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
    </Container>
  ))
  .add('with inset divider', () => (
    <Container>
      <Header title={'Label List'} />

      <List style={{ width: 300 }}>
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
    </Container>
  ));
