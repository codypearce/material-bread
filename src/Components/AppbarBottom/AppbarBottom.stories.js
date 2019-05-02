import React from 'react';
import { storiesOf } from '../../storybook/helpers/storiesOf';

import { AppbarBottom, Badge, IconButton, Fab, FabSpeedDial } from '../..';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';

/*  eslint-disable no-console */
export default storiesOf('Components|AppbarBottom', module)
  .addParameters({ jest: ['AppbarBottom'] })
  .add('Center Fab', () => (
    <Container scroll>
      <Header title={'Center Fab'} />
      <AppbarBottom
        fab={<Fab backgroundColor={'black'} />}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab backgroundColor={'black'} />}
        fabCutout
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'change-history'} backgroundColor={'#009688'} />}
        fabPosition={'center'}
        navigation={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'change-history'} backgroundColor={'#009688'} />}
        fabCutout
        fabPosition={'center'}
        navigation={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'drafts'} backgroundColor={'#8BC34A'} />}
        fabPosition={'center'}
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'drafts'} backgroundColor={'#8BC34A'} />}
        fabCutout
        fabPosition={'center'}
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'favorite'} backgroundColor={'#E91E63'} />}
        fabPosition={'center'}
        navigation={'menu'}
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
        fab={<Fab icon={'favorite'} backgroundColor={'#E91E63'} />}
        fabPosition={'center'}
        fabCutout
        navigation={'menu'}
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
        fab={<Fab />}
        fabPosition={'end'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab />}
        fabCutout
        fabPosition={'end'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'change-history'} backgroundColor={'#009688'} />}
        fabPosition={'end'}
        navigation={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'change-history'} backgroundColor={'#009688'} />}
        fabCutout
        fabPosition={'end'}
        navigation={'menu'}
        color={'#E91E63'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'drafts'} backgroundColor={'#8BC34A'} />}
        fabPosition={'end'}
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'drafts'} backgroundColor={'#8BC34A'} />}
        fabCutout
        fabPosition={'end'}
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />
      <AppbarBottom
        fab={<Fab icon={'favorite'} backgroundColor={'#E91E63'} />}
        fabPosition={'end'}
        navigation={'menu'}
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
        fab={<Fab icon={'favorite'} backgroundColor={'#E91E63'} />}
        fabPosition={'end'}
        fabCutout
        navigation={'menu'}
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
        navigation={'menu'}
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
        navigation={'arrow-back'}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        color={'#9C27B0'}
        style={{ marginBottom: 50 }}
      />

      <AppbarBottom
        navigation={'menu'}
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
  .add('with speeddial', () => (
    <Container scroll>
      <Header title={'SpeedDial'} />

      <AppbarBottom
        fab={
          <FabSpeedDial
            actions={actions}
            fab={<Fab backgroundColor={'#E91E63'} />}
          />
        }
        fabCutout
        fabPosition={'end'}
        navigation={'arrow-back'}
        fabStyles={{}}
        actionItems={[
          { name: 'search', onPress: () => console.log('onSearch') },
          { name: 'more-vert' },
        ]}
        style={{ marginTop: 300 }}
      />
    </Container>
  ));

const actions = [
  <Fab key={1} backgroundColor={'#E91E63'} icon={'archive'} />,
  <Fab key={2} backgroundColor={'#F44336'} icon={'delete'} />,
  <Fab key={3} backgroundColor={'#009688'} icon={'edit'} />,
  <Fab key={4} backgroundColor={'black'} icon={'attach-money'} />,
];
