import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, Text, View, TouchableWithoutFeedback } from 'react-native';

import { Paper, Menu, shadow, Hoverable } from '../..';

import withTheme from '../../Theme/withTheme';
import styles from './Tooltip.styles';

class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    content: PropTypes.string,
    tooltipPosition: PropTypes.string,
  };

  state = {
    visible: false,
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  _toggle = () => {
    const { visible } = this.state;

    this.setState({ visible: !visible });
  };

  _hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { children, content, style, tooltipPosition } = this.props;
    const { visible } = this.state;

    const platformTextStyles =
      Platform.OS == 'web'
        ? { whiteSpace: 'noWrap', fontSize: 10 }
        : { fontSize: 14 };

    const platformPaperStyles =
      Platform.OS == 'web'
        ? { height: 24, paddingHoriztonal: 8 }
        : { height: 32, paddingHoriztonal: 16 };

    return (
      <Menu
        tooltip
        visible={visible}
        button={
          <Hoverable onHoverIn={this._toggle} onHoverOut={this._hide}>
            <TouchableWithoutFeedback onPress={this._toggle}>
              <View>
                {React.cloneElement(children, {
                  onPress: () => {
                    this._toggle();
                    if (children.props.onPress) children.props.onPress();
                  },
                })}
              </View>
            </TouchableWithoutFeedback>
          </Hoverable>
        }
        onBackdropPress={this._hide}
        noBackDrop
        tooltipPosition={tooltipPosition}
        contentContainerStyle={{
          backgroundColor: 'transparent',
          paddingTop: 0,
          paddingBottom: 0,
        }}
        menuStyle={{
          width: 'auto',
          minWidth: 'auto',
          marginBottom: 40,
          ...shadow(0),
        }}>
        <Paper style={[styles.card, platformPaperStyles, style]}>
          <Text style={[styles.text, platformTextStyles]}>{content}</Text>
        </Paper>
      </Menu>
    );
  }
}

export default withTheme(Tooltip);
