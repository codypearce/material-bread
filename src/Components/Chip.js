import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import withTheme from '../Theme/withTheme';
import Paper from './Paper';
import Ripple from '../Abstract/Ripple';
import Icon from './Icon';

class Chip extends Component {
  static propTypes = {
    type: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    borderColor: PropTypes.string,
    onPress: PropTypes.function,
    onDelete: PropTypes.function,
    children: PropTypes.node,
    style: PropTypes.object,
    theme: PropTypes.object,
    disabled: PropTypes.bool,
  };

  render() {
    const {
      type,
      backgroundColor,
      textColor,
      borderColor,
      disabled,
      onPress,
      onDelete,
      style,
      children,
      ...rest
    } = this.props;

    let borderWidth = 0;
    let displayBackgroundColor = backgroundColor ? backgroundColor : '#1e88e5';
    let displayTextColor = textColor ? textColor : 'white';

    if (type == 'outlined') {
      borderWidth = StyleSheet.hairlineWidth;
      displayBackgroundColor = 'transparent';
      displayTextColor = '#1e88e5';
    }

    return (
      <Paper
        style={{
          ...styles.container,
          backgroundColor: displayBackgroundColor,
          borderColor,
          borderWidth,
          ...style,
        }}
        {...rest}>
        <Ripple
          rippleContainerBorderRadius={16}
          onPress={onPress}
          disabled={disabled}>
          <View style={styles.content}>
            <Text
              numberOfLines={1}
              style={{
                ...styles.text,
                color: displayTextColor,
              }}>
              {children}
            </Text>
            {onDelete ? (
              <TouchableWithoutFeedback onPress={onDelete}>
                <View>
                  <Icon
                    name="cancel"
                    style={{ marginRight: 8 }}
                    size={18}
                    color={'white'}
                  />
                </View>
              </TouchableWithoutFeedback>
            ) : null}
          </View>
        </Ripple>
      </Paper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderStyle: 'solid',
    flexGrow: 0,
    height: 32,
    alignSelf: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 0,
  },

  text: {
    minHeight: 24,
    lineHeight: 24,
    textAlignVertical: 'center',
    marginVertical: 4,
    marginHorizontal: 12,
  },
});

export default withTheme(Chip);
