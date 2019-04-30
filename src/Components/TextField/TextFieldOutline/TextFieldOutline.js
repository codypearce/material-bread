import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import TextFieldLabel from '../TextFieldLabel/TextFieldLabel';
import TextFieldHelperText from '../TextFieldHelperText/TextFieldHelperText';
import styles from './TextFieldOutline.styles';

class TextFieldOutlined extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    style: PropTypes.object,
    containerStyle: PropTypes.object,
    error: PropTypes.bool,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    labelStyle: PropTypes.object,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
    focused: PropTypes.bool,
    helperText: PropTypes.string,
    helperVisible: PropTypes.bool,
    helperTextStyle: PropTypes.object,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
  };

  _renderLeadingIcon() {
    const { leadingIcon } = this.props;

    return (
      <View style={{ position: 'absolute', left: 8, top: 16 }}>
        {React.cloneElement(leadingIcon, {
          size: leadingIcon.props.size ? leadingIcon.props.size : 24,
        })}
      </View>
    );
  }
  _renderTrailingIcon() {
    const { trailingIcon } = this.props;

    return (
      <View style={{ position: 'absolute', right: 12, top: 16 }}>
        {React.cloneElement(trailingIcon, {
          size: trailingIcon.props.size ? trailingIcon.props.size : 24,
        })}
      </View>
    );
  }

  render() {
    const {
      style,
      containerStyle,
      error,
      label,
      labelColor,
      labelStyle,
      handleFocus,
      handleBlur,
      focused,
      helperText,
      helperVisible,
      helperTextStyle,
      leadingIcon,
      trailingIcon,
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
          labelColor={labelColor}
          style={labelStyle}
          leadingIcon={leadingIcon}
        />
        {leadingIcon ? this._renderLeadingIcon() : null}
        <TextInput
          style={[
            styles.textField,
            styles.outlinedInput,
            {
              borderColor,
              minHeight: rest.dense ? 40 : 56,
              height: rest.multiline || rest.numberOfLines > 1 ? 'auto' : 56,
              paddingBottom: rest.multiline ? 8 : 0,
              paddingTop: rest.multiline ? 20 : 0,
              outline: 'none',
              paddingLeft: leadingIcon ? 44 : 12,
              paddingRight: trailingIcon ? 36 : 0,
            },
            style,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {trailingIcon ? this._renderTrailingIcon() : null}

        <TextFieldHelperText
          error={error}
          visible={helperVisible || error}
          style={helperTextStyle}>
          {helperText}
        </TextFieldHelperText>
      </View>
    );
  }
}

export default withTheme(TextFieldOutlined);
