import React from 'react';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { Banner, Avatar } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';

/* eslint-disable no-console */
export default storiesOf('Components|Banner', module)
  .addParameters({ jest: ['Banner'] })
  .add('Single line', () => (
    <Container scroll>
      <Header title={'Banner Single Line'} />

      <Banner
        actionItems={[
          { name: 'Sign in', onPress: () => console.log('sign in') },
        ]}
        singleLine
        message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        visible
        style={{ marginBottom: 20 }}
      />
      <Banner
        actionItems={[{ name: 'Continue' }]}
        singleLine
        message={'New Action here'}
        visible
        style={{ marginBottom: 20 }}
      />
      <Banner
        actionItems={[{ name: 'Cancel' }, { name: 'Continue' }]}
        singleLine
        message={'Two Actions here'}
        visible
      />
    </Container>
  ))
  .add('Multi line', () => (
    <Container scroll>
      <Header title={'Banner Multi line'} />
      <Banner
        visible
        actionItems={[{ name: 'Continue' }, { name: 'Sign in' }]}
        message={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        style={{ marginBottom: 40 }}
      />
      <Banner
        visible
        actionItems={[{ name: 'Continue' }, { name: 'Sign in' }]}
        message={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        }
        style={{ marginBottom: 40 }}
      />

      <Banner
        visible
        actionItems={[{ name: 'Continue' }, { name: 'Sign in' }]}
        media={
          <Avatar
            type="icon"
            content="notifications"
            size={40}
            contentColor={'white'}
            color={'#42a5f5'}
          />
        }
        message={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        style={{ marginBottom: 40 }}
      />

      <Banner
        visible
        actionItems={[{ name: 'Continue' }, { name: 'Sign in' }]}
        media={
          <Avatar
            type="icon"
            content="favorite"
            size={40}
            contentColor={'white'}
            color={'#E91E63'}
          />
        }
        message={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        }
        style={{ marginBottom: 40 }}
      />
    </Container>
  ));
