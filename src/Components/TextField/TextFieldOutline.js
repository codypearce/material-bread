import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';
import withTheme from '../../Theme/withTheme';
import TextFieldLabel from './TextFieldLabel';

class TextFieldOutlined extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    style: PropTypes.object,
    containerStyle: PropTypes.object,
    error: PropTypes.bool,
    label: PropTypes.string,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
    focused: PropTypes.bool,
  };

  render() {
    const {
      style,
      containerStyle,
      error,
      label,
      handleFocus,
      handleBlur,
      focused,
      ...rest
    } = this.props;

    let borderColor = focused ? 'rgba(33, 150, 243, 1)' : 'rgb(192, 192, 192)';
    if (error) borderColor = 'red';

    return (
      <View style={{ ...styles.containerStyle, ...containerStyle }}>
        <TextFieldLabel
          label={label}
          focused={focused}
          error={error}
          value={rest.value}
          type={'outlined'}
        />
        <TextInput
          style={{
            ...styles.textField,
            ...styles.outlinedInput,
            borderColor,
            minHeight: rest.dense ? 40 : 56,
            height: rest.multiline || rest.numberOfLines > 1 ? 'auto' : 56,
            paddingBottom: rest.multiline ? 8 : 0,
            paddingTop: rest.multiline ? 20 : 0,
            ...style,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {},
  textField: {
    height: 56,
    paddingHorizontal: 12,
  },
  outlinedInput: {
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default withTheme(TextFieldOutlined);
