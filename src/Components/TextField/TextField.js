import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import TextFieldOutline from './TextFieldOutline/TextFieldOutline.js';
import TextFieldFilled from './TextFieldFilled/TextFieldFilled.js';
import TextFieldFlat from './TextFieldFlat/TextFieldFlat.js';

class TextField extends Component {
  static propTypes = {
    type: PropTypes.string,
    error: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
  };

  state = {
    focused: false,
  };

  handleFocus = (...args) => {
    const { disabled, onFocus } = this.props;

    if (disabled) return;

    this.setState({ focused: true });

    if (onFocus) onFocus(...args);
  };

  handleBlur = (...args) => {
    const { disabled, onBlur } = this.props;

    if (disabled) return;

    this.setState({ focused: false });

    if (onBlur) onBlur(...args);
  };

  render() {
    const { type, error, ...rest } = this.props;
    const { focused } = this.state;

    if (type == 'outlined') {
      return (
        <TextFieldOutline
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}
          focused={focused}
          error={Boolean(error)}
          {...rest}
        />
      );
    } else if (type == 'filled') {
      return (
        <TextFieldFilled
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}
          focused={focused}
          error={Boolean(error)}
          {...rest}
        />
      );
    } else {
      return (
        <TextFieldFlat
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}
          focused={focused}
          error={Boolean(error)}
          {...rest}
        />
      );
    }
  }
}

export default withTheme(TextField);
