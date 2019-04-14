import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import TextFieldUnderline from '../TextFieldUnderline/TextFieldUnderline';
import TextFieldLabel from '../TextFieldLabel/TextFieldLabel';
import TextFieldHelperText from '../TextFieldHelperText/TextFieldHelperText';

class TextFieldFilled extends Component {
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
    helperText: PropTypes.string,
    helperVisible: PropTypes.bool,
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
      helperText,
      helperVisible,
      ...rest
    } = this.props;

    return (
      <View style={{ ...styles.containerStyle, ...containerStyle }}>
        <TextFieldLabel
          label={label}
          focused={focused}
          error={error}
          value={rest.value}
        />
        <TextInput
          style={[
            styles.textField,
            styles.filledInput,
            {
              minHeight: rest.dense ? 40 : 56,
              height: rest.multiline || rest.numberOfLines > 1 ? 'auto' : 56,
              paddingBottom: rest.multiline ? 8 : 0,
              paddingTop: rest.multiline ? 24 : 16,
            },
            style,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />

        <TextFieldUnderline focused={focused} error={error} />

        <TextFieldHelperText error={error} visible={helperVisible || error}>
          {helperText}
        </TextFieldHelperText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    position: 'relative',
  },
  textField: {
    textAlignVertical: 'bottom',
    paddingTop: 16,
    paddingHorizontal: 12,
  },

  filledInput: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#d9d9d9',
  },
});

export default withTheme(TextFieldFilled);
