import React from 'react';
import { View, Image, ScrollView } from 'react-native';

import {
  Dialog,
  Button,
  Avatar,
  BodyText,
  Ripple,
  Checkbox,
  Icon,
} from '../../';
import { State, Store } from '@sambego/storybook-state';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

const store = new Store({
  visible: false,
  checkedOne: false,
  checkedTwo: false,
  checkedThree: false,
  checkedFour: false,
  checkedFive: false,
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
              textColor={'#6E2CFA'}
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
                  textColor: '#6E2CFA',
                  text: 'Cancel',
                  onPress: () => store.set({ visible: false }),
                },
                {
                  color: '#6E2CFA',
                  text: 'Discard',
                  type: 'contained',
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
              textColor={'#6E2CFA'}
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
                  textColor: '#6E2CFA',
                  text: 'Cancel',
                  onPress: () => store.set({ visible: false }),
                },
                {
                  textColor: '#6E2CFA',
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
              textColor={'#6E2CFA'}
              text={'Open'}
              onPress={() => store.set({ visible: !state.visible })}
            />
            <Dialog
              visible={state.visible}
              onTouchOutside={() => store.set({ visible: false })}
              title={'Set up backup account'}
              style={{ paddingRight: 24 }}>
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
                  paddingBottom: 24,
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
              textColor={'#6E2CFA'}
              text={'Open'}
              onPress={() => store.set({ visible: !state.visible })}
            />
            <Dialog
              visible={state.visible}
              onTouchOutside={() => store.set({ visible: false })}
              title={'Get this party started?'}
              titleStyle={{ marginLeft: 24 }}
              contentStyle={{ paddingLeft: 0, paddingBottom: 0, height: 360 }}
              actionItems={[
                {
                  textColor: '#6E2CFA',
                  text: 'Second',
                  onPress: () => store.set({ visible: false }),
                },
                {
                  textColor: '#6E2CFA',
                  text: 'First',
                  onPress: () => store.set({ visible: false }),
                },
              ]}>
              <View
                style={{
                  borderBottomColor: 'rgba(0, 0, 0, 0.08)',
                  borderBottomWidth: 1,
                }}
              />
              <ScrollView scrollEnabled contentContainerStyle={{ padding: 16 }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="insert-chart"
                    size={24}
                    color={'rgba(0, 0, 0, 0.54)'}
                  />
                  <BodyText
                    text="option 1"
                    style={{ marginLeft: 32, width: 100 }}
                  />
                  <Checkbox
                    rippleMatchesCheckbox
                    checkboxColor={'rgba(0, 0, 0, 0.54)'}
                    checked={state.checkedOne}
                    style={{ paddingVertical: 16 }}
                    label={'01'}
                    labelStyle={{ marginLeft: 130 }}
                    labelPos={'left'}
                    onPress={() => store.set({ checkedOne: !state.checkedOne })}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="insert-chart"
                    size={24}
                    color={'rgba(0, 0, 0, 0.54)'}
                  />
                  <BodyText
                    text="option 2"
                    style={{ marginLeft: 32, width: 100 }}
                  />
                  <Checkbox
                    rippleMatchesCheckbox
                    checkboxColor={'rgba(0, 0, 0, 0.54)'}
                    checked={state.checkedTwo}
                    style={{ paddingVertical: 16 }}
                    label={'02'}
                    labelStyle={{ marginLeft: 130 }}
                    labelPos={'left'}
                    onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="insert-chart"
                    size={24}
                    color={'rgba(0, 0, 0, 0.54)'}
                  />
                  <BodyText
                    text="option 3"
                    style={{ marginLeft: 32, width: 100 }}
                  />
                  <Checkbox
                    rippleMatchesCheckbox
                    checkboxColor={'rgba(0, 0, 0, 0.54)'}
                    checked={state.checkedThree}
                    style={{ paddingVertical: 16 }}
                    label={'03'}
                    labelStyle={{ marginLeft: 130 }}
                    labelPos={'left'}
                    onPress={() =>
                      store.set({ checkedThree: !state.checkedThree })
                    }
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="insert-chart"
                    size={24}
                    color={'rgba(0, 0, 0, 0.54)'}
                  />
                  <BodyText
                    text="option 4"
                    style={{ marginLeft: 32, width: 100 }}
                  />
                  <Checkbox
                    rippleMatchesCheckbox
                    checkboxColor={'rgba(0, 0, 0, 0.54)'}
                    checked={state.checkedFour}
                    style={{ paddingVertical: 16, marginLeft: 0 }}
                    label={'04'}
                    labelStyle={{ marginLeft: 130, width: 20 }}
                    labelPos={'left'}
                    onPress={() =>
                      store.set({ checkedFour: !state.checkedFour })
                    }
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="insert-chart"
                    size={24}
                    color={'rgba(0, 0, 0, 0.54)'}
                  />
                  <BodyText
                    text="option 5"
                    style={{ marginLeft: 32, width: 100 }}
                  />
                  <Checkbox
                    rippleMatchesCheckbox
                    checkboxColor={'rgba(0, 0, 0, 0.54)'}
                    checked={state.checkedFive}
                    style={{ paddingVertical: 16 }}
                    label={'05'}
                    labelStyle={{ marginLeft: 130 }}
                    labelPos={'left'}
                    onPress={() =>
                      store.set({ checkedFive: !state.checkedFive })
                    }
                  />
                </View>
              </ScrollView>
            </Dialog>
          </View>
        )}
      </State>
    </Container>
  ));
