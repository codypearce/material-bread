import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import SelectOutlined from './SelectOutlined/SelectOutlined';
import SelectFlat from './SelectFlat/SelectFlat';
import SelectFilled from './SelectFilled/SelectFilled';

class TextField extends Component {
  static propTypes = {
    type: PropTypes.string,
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
    const { type, ...rest } = this.props;
    const { focused } = this.state;

    if (type == 'outlined') {
      return (
        <SelectOutlined
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}
          focused={focused}
          {...rest}
        />
      );
    } else if (type == 'filled') {
      return (
        <SelectFilled
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}
          focused={focused}
          {...rest}
        />
      );
    } else {
      return (
        <SelectFlat
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}
          focused={focused}
          {...rest}
        />
      );
    }
  }
}

export default withTheme(TextField);
