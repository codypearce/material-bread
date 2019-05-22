import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Platform } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import TextFieldUnderline from '../TextFieldUnderline/TextFieldUnderline';
import TextFieldLabel from '../TextFieldLabel/TextFieldLabel';
import TextFieldHelperText from '../TextFieldHelperText/TextFieldHelperText';
import styles from './TextFieldFlat.styles';

class TextFieldFlat extends Component {
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
    underlineColor: PropTypes.string,
    underlineActiveColor: PropTypes.string,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
    dense: PropTypes.bool,
    value: PropTypes.bool,
    multiline: PropTypes.bool,
    suffix: PropTypes.node,
    prefix: PropTypes.node,
  };

  static defaultProps = {
    helperVisible: true,
  };

  state = {
    height: 56,
  };

  componentDidUpdate(prevProps) {
    const { value, multiline } = this.props;
    if (value && value.length < 1 && prevProps.value.length > 0 && multiline) {
      this.setState({ height: 56 });
    }
  }

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

  _renderPrefix() {
    const { prefix } = this.props;

    return (
      <View style={{ position: 'absolute', left: 0, top: 26 }}>
        {React.cloneElement(prefix, {
          color: prefix.props.color ? prefix.props.color : 'rgba(0, 0, 0, .57)',
          fontSize: prefix.props.fontSize ? prefix.props.fontSize : 16,
        })}
      </View>
    );
  }

  _renderSuffix() {
    const { suffix } = this.props;

    return (
      <View style={{ position: 'absolute', right: 16, top: 28 }}>
        {React.cloneElement(suffix, {
          color: suffix.props.color ? suffix.props.color : 'rgba(0, 0, 0, .57)',
          fontSize: suffix.props.fontSize ? suffix.props.fontSize : 12,
        })}
      </View>
    );
  }

  _updateTextInputHeight = e => {
    if (!this.props.multiline) return;

    const nativeHeight = e.nativeEvent.contentSize.height;

    this.setState({
      height: nativeHeight < 56 ? 56 : nativeHeight,
    });
  };

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
      underlineColor,
      underlineActiveColor,
      leadingIcon,
      trailingIcon,
      dense,
      suffix,
      prefix,
      ...rest
    } = this.props;

    let height =
      rest.multiline || rest.numberOfLines > 1 ? this.state.height : 56;

    if (dense) {
      height = 40;
    }

    let paddingLeft = leadingIcon ? 44 : 0;
    if (prefix) paddingLeft = 16;

    const platformStyles = Platform.OS == 'web' ? { outlineWidth: 0 } : {};

    return (
      <View
        style={[
          styles.containerStyle,
          { marginBottom: helperText && helperVisible ? 20 : 0 },
          containerStyle,
        ]}>
        <TextFieldLabel
          label={label}
          focused={focused}
          error={error}
          value={rest.value}
          type={'flat'}
          labelColor={labelColor}
          style={labelStyle}
          leadingIcon={leadingIcon}
          dense={dense}
          prefix={prefix}
        />
        {leadingIcon ? this._renderLeadingIcon() : null}
        {prefix ? this._renderPrefix() : null}
        <TextInput
          style={[
            styles.textField,
            styles.flatInput,
            platformStyles,
            {
              minHeight: dense ? 40 : 56,
              height: height,
              paddingBottom: rest.multiline ? 8 : 0,
              paddingTop: rest.multiline ? 24 : 16,
              paddingLeft: paddingLeft,
              paddingRight: trailingIcon || suffix ? 36 : 0,
            },
            style,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onContentSizeChange={e => this._updateTextInputHeight(e)}
          {...rest}
        />
        {trailingIcon ? this._renderTrailingIcon() : null}
        {suffix ? this._renderSuffix() : null}
        <TextFieldUnderline
          focused={focused}
          error={error}
          underlineColor={underlineColor}
          underlineActiveColor={underlineActiveColor}
        />
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

export default withTheme(TextFieldFlat);
