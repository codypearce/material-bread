import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import withTheme from '../Theme/withTheme';
import Paper from './Paper';
import Button from './Button';
import BodyText from './Typography/BodyText';

class Banner extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    image: PropTypes.string,
    children: PropTypes.node,
    actions: PropTypes.node,
    style: PropTypes.object,
    theme: PropTypes.object,
    leftActionText: PropTypes.string,
    leftActionOnPress: PropTypes.func,
    rightActionText: PropTypes.string,
    rightActionOnPress: PropTypes.func,
    message: PropTypes.string,
    media: PropTypes.node,
    singleLine: PropTypes.bool,
  };

  _renderActions() {
    const {
      media,
      leftActionText,
      leftActionOnPress,
      rightActionText,
      rightActionOnPress,
    } = this.props;

    const buttonMarginTop = media ? 20 : 12;

    return (
      <View style={{ ...styles.buttons, marginTop: buttonMarginTop }}>
        <Button
          compact={true}
          type="text"
          onPress={leftActionOnPress}
          style={styles.button}>
          {leftActionText}
        </Button>
        <Button
          compact
          type="text"
          onPress={rightActionOnPress}
          style={styles.button}>
          {rightActionText}
        </Button>
      </View>
    );
  }

  render() {
    const {
      message,
      style,
      media,
      singleLine,
      rightActionOnPress,
      rightActionText,
      ...rest
    } = this.props;

    return (
      <Paper style={{ ...styles.container, ...style }} elevation={1} {...rest}>
        <View style={{ ...styles.innerContainer }}>
          <View
            style={{
              ...styles.content,
              alignItems: singleLine ? 'center' : 'flex-start',
              justifyContent: singleLine ? 'space-between' : 'flex-start',
              marginTop: singleLine ? 10 : 24,
              marginBottom: singleLine ? 8 : 0,
            }}>
            {media ? <View style={styles.image}>{media}</View> : null}
            <BodyText type={2} style={styles.message}>
              {message}
            </BodyText>
            {singleLine ? (
              <Button
                compact
                type="text"
                onPress={rightActionOnPress}
                style={styles.button}>
                {rightActionText}
              </Button>
            ) : null}
          </View>
          {singleLine ? null : this._renderActions()}
        </View>
      </Paper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
  },
  innerContainer: {
    height: 'auto',
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  image: {
    marginHorizontal: 8,
  },
  message: {
    flex: 1,
    marginHorizontal: 8,
    lineHeight: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 8,
    marginBottom: 8,
    marginTop: 20,
  },
  button: {
    width: 'auto',
    flex: 0,
    marginLeft: 8,
  },
});

export default withTheme(Banner);
