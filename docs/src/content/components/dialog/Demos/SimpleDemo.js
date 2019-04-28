import React from 'react';
import { View, Image, Text } from 'react-native';
import { ComponentDemo } from '@components';
import {
  Dialog,
  Button,
  Avatar,
  Ripple,
  BodyText,
} from '../../../../../../src/index';

export const code = `class DialogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    visible: false,
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row', }}>    
        <Button text={'Open'} onPress={() => this.setState({ visible: !this.state.visible })} />
        <Dialog
            visible={this.state.visible}
            onTouchOutside={() => this.setState({ visible: false })}
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
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Simple'}
    sectionHref={`${pageHref}#simple`}
    sectionId={'simple'}
    code={code}
    scope={{ View, Dialog, Button, Text, Avatar, Image, Ripple, BodyText }}
  />
);
export default SubtitleDemo;
