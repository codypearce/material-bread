import React from 'react';
import { View } from 'react-native';

import { Icon, ToggleButton, ToggleButtonGroup } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Toggle Button', module)
  .addParameters({ jest: ['ToggleButton'] })
  .add('Single', () => (
    <Container>
      <Header title={'Toggle Button'} />
      <View style={{ flexDirection: 'row' }}>
        <ToggleButton
          activeNode={<Icon name="alarm" size={32} />}
          inActiveNode={
            <Icon name="alarm" size={32} style={{ opacity: 0.5 }} />
          }
          size={32}
        />
        <ToggleButton
          activeNode={<Icon name="face" size={32} color={'purple'} />}
          inActiveNode={
            <Icon
              name="face"
              size={32}
              style={{ opacity: 0.5 }}
              color={'purple'}
            />
          }
          size={32}
        />
        <ToggleButton
          activeNode={<Icon name="arrow-back" size={32} color={'orange'} />}
          inActiveNode={
            <Icon
              name="arrow-back"
              size={32}
              style={{ opacity: 0.5 }}
              color={'orange'}
            />
          }
          size={32}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <ToggleButton
          activeNode={<Icon name="favorite" size={32} />}
          inActiveNode={<Icon name="favorite-border" size={32} />}
          size={32}
        />
        <ToggleButton
          activeNode={<Icon name="brightness-1" size={32} color={'purple'} />}
          inActiveNode={<Icon name="adjust" size={32} color={'purple'} />}
          size={32}
        />
        <ToggleButton
          activeNode={<Icon name="label" size={32} color={'orange'} />}
          inActiveNode={
            <Icon
              name="label-outline"
              size={32}
              style={{ opacity: 0.5 }}
              color={'orange'}
            />
          }
          size={32}
        />
      </View>
    </Container>
  ))
  .add('Custom', () => (
    <Container>
      <Header title={'Toggle Button'} />
      <View style={{ flexDirection: 'row' }}>
        <ToggleButton
          activeNode={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.12)',
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.12)',
                padding: 8,
              }}>
              <Icon name="format-italic" size={20} />
            </View>
          }
          inActiveNode={
            <View
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.12)',
                padding: 8,
              }}>
              <Icon name="format-italic" size={20} />
            </View>
          }
          rippleContainerBorderRadius={0}
        />
        <ToggleButton
          activeNode={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.12)',
                borderWidth: 1,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderColor: 'rgba(0,0,0,.12)',
                padding: 8,
              }}>
              <Icon name="format-bold" size={20} />
            </View>
          }
          inActiveNode={
            <View
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderColor: 'rgba(0,0,0,.12)',
                padding: 8,
              }}>
              <Icon name="format-bold" size={20} />
            </View>
          }
          rippleContainerBorderRadius={0}
        />
        <ToggleButton
          activeNode={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.12)',
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.12)',
                padding: 8,
              }}>
              <Icon name="format-underlined" size={20} />
            </View>
          }
          inActiveNode={
            <View
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.12)',
                padding: 8,
              }}>
              <Icon name="format-underlined" size={20} />
            </View>
          }
          rippleContainerBorderRadius={0}
        />
      </View>
    </Container>
  ))
  .add('Group', () => (
    <Container>
      <Header title={'Toggle Button Group'} />
      <ToggleButtonGroup>
        <View style={{ flexDirection: 'row' }}>
          <ToggleButton
            value={'italic'}
            activeNode={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.12)',
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,.12)',
                  padding: 8,
                }}>
                <Icon name="format-align-center" size={20} />
              </View>
            }
            inActiveNode={
              <View
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,.12)',
                  padding: 8,
                }}>
                <Icon name="format-align-center" size={20} />
              </View>
            }
            rippleContainerBorderRadius={0}
          />
          <ToggleButton
            value={'bold'}
            activeNode={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.12)',
                  borderWidth: 1,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  borderColor: 'rgba(0,0,0,.12)',
                  padding: 8,
                }}>
                <Icon name="format-align-left" size={20} />
              </View>
            }
            inActiveNode={
              <View
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  borderColor: 'rgba(0,0,0,.12)',
                  padding: 8,
                }}>
                <Icon name="format-align-left" size={20} />
              </View>
            }
            rippleContainerBorderRadius={0}
          />
          <ToggleButton
            value={'underlined'}
            activeNode={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.12)',
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,.12)',
                  padding: 8,
                }}>
                <Icon name="format-align-right" size={20} />
              </View>
            }
            inActiveNode={
              <View
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,.12)',
                  padding: 8,
                }}>
                <Icon name="format-align-right" size={20} />
              </View>
            }
            rippleContainerBorderRadius={0}
          />
        </View>
      </ToggleButtonGroup>
    </Container>
  ));
