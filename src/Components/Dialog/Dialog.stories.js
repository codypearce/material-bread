import React from 'react';
import { View, Image, ScrollView } from 'react-native';

import { Dialog, Button, Avatar, BodyText, Ripple } from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  visible: false,
});

export default storiesOf('Components|Dialog', module)
  .addParameters({ jest: ['Dialog'] })
  .add('Alert', () => (
    <Container>
      <Header title={'Alert Dialog'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row' }}>
            <Button
              text={'Open'}
              onPress={() => store.set({ visible: !state.visible })}
            />
            <Dialog
              visible={state.visible}
              onTouchOutside={() => store.set({ visible: false })}
              supportingText={'Discard draft?'}
              style={{ width: 280 }}
              actionItems={[
                {
                  text: 'Cancel',
                  onPress: () => store.set({ visible: false }),
                },
                {
                  text: 'Discard',
                  onPress: () => store.set({ visible: false }),
                },
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Confirmation', () => (
    <Container>
      <Header title={'Confirmation Dialog'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row' }}>
            <Button
              text={'Open'}
              onPress={() => store.set({ visible: !state.visible })}
            />
            <Dialog
              visible={state.visible}
              onTouchOutside={() => store.set({ visible: false })}
              title={'Use Googles location service?'}
              supportingText={
                'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
              }
              actionItems={[
                {
                  text: 'Cancel',
                  onPress: () => store.set({ visible: false }),
                },
                {
                  text: 'OK',
                  onPress: () => store.set({ visible: false }),
                },
              ]}
            />
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Simple', () => (
    <Container>
      <Header title={'Simple Dialog'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row' }}>
            <Button
              text={'Open'}
              onPress={() => store.set({ visible: !state.visible })}
            />
            <Dialog
              visible={state.visible}
              onTouchOutside={() => store.set({ visible: false })}
              title={'Set up backup account'}>
              <Ripple
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Avatar
                  type="image"
                  image={
                    <Image
                      source={{
                        uri:
                          'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
                      }}
                    />
                  }
                  size={40}
                />
                <BodyText
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 0.54)',
                    marginLeft: 20,
                  }}>
                  user1@gmail.com
                </BodyText>
              </Ripple>

              <Ripple
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Avatar
                  type="image"
                  image={
                    <Image
                      source={{
                        uri:
                          'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
                      }}
                    />
                  }
                  size={40}
                />
                <BodyText
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 0.54)',
                    marginLeft: 20,
                  }}>
                  user2@gmail.com
                </BodyText>
              </Ripple>

              <Ripple
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Avatar
                  type="icon"
                  content="add"
                  color="#ccc"
                  contentColor={'white'}
                  size={40}
                />
                <BodyText
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 0.54)',
                    marginLeft: 20,
                  }}>
                  Add account
                </BodyText>
              </Ripple>
            </Dialog>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Scrolling', () => (
    <Container>
      <Header title={'Scrolling Dialog'} />

      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View style={{ flexDirection: 'row' }}>
            <Button
              text={'Open'}
              onPress={() => store.set({ visible: !state.visible })}
            />
            <Dialog
              visible={state.visible}
              onTouchOutside={() => store.set({ visible: false })}
              title={'Terms of Service'}
              contentStyle={{ paddingRight: 0 }}
              actionItems={[
                {
                  text: 'Cancel',
                  onPress: () => store.set({ visible: false }),
                },
                {
                  text: 'OK',
                  onPress: () => store.set({ visible: false }),
                },
              ]}>
              <ScrollView
                scrollEnabled
                contentContainerStyle={{ paddingRight: 24 }}>
                <BodyText
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 0.54)',
                    marginBottom: 10,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </BodyText>
                <BodyText
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 0.54)',
                    marginBottom: 10,
                  }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </BodyText>
                <BodyText
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 0.54)',
                    marginBottom: 10,
                  }}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis dolor repellendus.
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus, ut aut reiciendis voluptatibus maiores
                  alias consequatur aut perferendis doloribus asperiores
                  repellat.
                </BodyText>
              </ScrollView>
            </Dialog>
          </View>
        )}
      </State>
    </Container>
  ));
