import React from 'react';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { AppbarBottom, Badge, IconButton } from '../..';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';

/*  eslint-disable no-console */
export default storiesOf('Components|AppbarBottom', module)
  .addParameters({ jest: ['AppbarBottom'] })
  .add('Center Fab', () => (
    <Container scroll>
      <Header title={'Center Fab'} />
      <AppbarBottom
        fab
        onFab={() => console.log('onFab')}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabCutout
        onFab={() => console.log('onFab')}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabPosition={'center'}
        fabIcon={'change-history'}
        fabStyles={{ backgroundColor: '#009688' }}
        navigationType={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabCutout
        fabPosition={'center'}
        fabIcon={'change-history'}
        fabStyles={{ backgroundColor: '#009688' }}
        navigationType={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabPosition={'center'}
        fabIcon={'drafts'}
        fabStyles={{ backgroundColor: '#8BC34A' }}
        navigationType={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabCutout
        fabPosition={'center'}
        fabIcon={'drafts'}
        fabStyles={{ backgroundColor: '#8BC34A' }}
        navigationType={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabPosition={'center'}
        fabIcon={'favorite'}
        fabStyles={{ backgroundColor: '#E91E63' }}
        navigationType={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabPosition={'center'}
        fabIcon={'favorite'}
        fabCutout
        fabStyles={{ backgroundColor: '#E91E63' }}
        navigationType={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
    </Container>
  ))
  .add('End Fab', () => (
    <Container scroll>
      <Header title={'End Fab'} />
      <AppbarBottom
        fab
        fabPosition={'end'}
        onFab={() => console.log('onFab')}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabCutout
        fabPosition={'end'}
        onFab={() => console.log('onFab')}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabPosition={'end'}
        fabIcon={'change-history'}
        fabStyles={{ backgroundColor: '#009688' }}
        navigationType={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabCutout
        fabPosition={'end'}
        fabIcon={'change-history'}
        fabStyles={{ backgroundColor: '#009688' }}
        navigationType={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabPosition={'end'}
        fabIcon={'drafts'}
        fabStyles={{ backgroundColor: '#8BC34A' }}
        navigationType={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabCutout
        fabPosition={'end'}
        fabIcon={'drafts'}
        fabStyles={{ backgroundColor: '#8BC34A' }}
        navigationType={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabPosition={'end'}
        fabIcon={'favorite'}
        fabStyles={{ backgroundColor: '#E91E63' }}
        navigationType={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab
        fabPosition={'end'}
        fabIcon={'favorite'}
        fabCutout
        fabStyles={{ backgroundColor: '#E91E63' }}
        navigationType={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
    </Container>
  ))
  .add('No Fab', () => (
    <Container scroll>
      <Header title={'No Fab'} />
      <AppbarBottom
        onFab={() => console.log('onFab')}
        style={{ marginBottom: 50 }}
        actionItems={[
          { name: 'add' },
          { name: 'edit' },

          { name: 'archive' },
          { name: 'delete' },
        ]}
      />

      <AppbarBottom
        fabStyles={{ backgroundColor: '#009688' }}
        navigationType={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
        actionItems={[
          { name: 'add' },
          { name: 'edit' },

          { name: 'archive' },
          { name: 'delete' },
        ]}
      />

      <AppbarBottom
        navigationType={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />

      <AppbarBottom
        navigationType={'menu'}
        actionItems={[
          <Badge
            key={1}
            containerStyle={{ marginRight: 16, flex: 1 }}
            color={'#e10050'}
            textColor={'white'}
            size={14}
            content={77}>
            <IconButton name="favorite" size={24} color={'white'} />
          </Badge>,
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#009688'}
        style={{ marginBottom: 50 }}
      />
    </Container>
  ));
