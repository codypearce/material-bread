import React from 'react';
import { Text } from 'react-native';

import { MenuItem, Paper, Divider, Icon } from '../../..';

import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

export default storiesOf('Components|Menu/MenuItem', module)
  .addParameters({ jest: ['MenuItem'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Menu Item'} />

      <Paper radius={6} style={{ width: 200 }}>
        <MenuItem>Menu item 1</MenuItem>
        <MenuItem>Menu item 2</MenuItem>
        <Divider />
        <MenuItem disabled>Menu item 3</MenuItem>
        <MenuItem>Menu item 2</MenuItem>
      </Paper>
    </Container>
  ))
  .add('with icon', () => (
    <Container>
      <Header title={'Menu icons'} />

      <Paper radius={6} style={{ width: 200 }}>
        <MenuItem icon={<Icon name={'remove-red-eye'} />}>Preview</MenuItem>
        <MenuItem icon={<Icon name={'person-add'} />}>Share</MenuItem>
        <MenuItem icon={<Icon name={'link'} />}>Get Link</MenuItem>
        <Divider />
        <MenuItem icon={<Icon name={'content-copy'} />}>Preview</MenuItem>
        <MenuItem icon={<Icon name={'file-download'} />}>Download</MenuItem>
      </Paper>
    </Container>
  ))
  .add('with keyboard', () => (
    <Container>
      <Header title={'Menu keyboard commands'} />

      <Paper radius={6} style={{ width: 200 }}>
        <MenuItem
          icon={<Icon name={'content-cut'} />}
          keyboardCommand={
            <Text style={{ fontSize: 12, color: '#6e6e6e' }}>&#8984;X</Text>
          }>
          Cut
        </MenuItem>
        <MenuItem
          icon={<Icon name={'content-copy'} />}
          keyboardCommand={
            <Text style={{ fontSize: 12, color: '#6e6e6e' }}>&#8984;C</Text>
          }>
          Copy
        </MenuItem>
        <MenuItem
          icon={<Icon name={'content-paste'} />}
          keyboardCommand={
            <Text style={{ fontSize: 12, color: '#6e6e6e' }}>&#8984;V</Text>
          }>
          Paste
        </MenuItem>
      </Paper>
    </Container>
  ));
