import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import TextFieldUnderline from '../TextFieldUnderline/TextFieldUnderline';
import TextFieldLabel from '../TextFieldLabel/TextFieldLabel';
import TextFieldHelperText from '../TextFieldHelperText/TextFieldHelperText';
import styles from './TextFieldFilled.styles';

class TextFieldFilled extends Component {
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
  };

  static defaultProps = {
    helperVisible: true,
  };

  state = {
    height: 56,
  };

  componentDidUpdate(prevProps) {
    const { value, multiline } = this.props;
    if (value.length < 1 && prevProps.value.length > 0 && multiline) {
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

  _updateTextInputHeight = e => {
    if (!this.props.multiline) return;

    const nativeHeight = e.nativeEvent.contentSize.height;

    this.setState({
      height: nativeHeight,
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
      ...rest
    } = this.props;

    let height =
      rest.multiline || rest.numberOfLines > 1 ? this.state.height : 56;
    let paddingTop = rest.multiline ? 24 : 12;
    if (dense) {
      height = label ? 52 : 40;
      paddingTop = 6;
    }

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
          labelColor={labelColor}
          style={labelStyle}
          leadingIcon={leadingIcon}
          dense={dense}
        />
        {leadingIcon ? this._renderLeadingIcon() : null}
        <TextInput
          style={[
            styles.textField,
            styles.filledInput,
            {
              minHeight: dense ? 40 : 56,
              height: height,
              paddingBottom: rest.multiline ? 8 : 0,
              paddingTop: paddingTop,
              outlineWidth: 0,
              paddingLeft: leadingIcon ? 44 : 12,
              paddingRight: trailingIcon ? 36 : 0,
            },
            style,
          ]}
          onContentSizeChange={e => this._updateTextInputHeight(e)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {trailingIcon ? this._renderTrailingIcon() : null}

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

export default withTheme(TextFieldFilled);
