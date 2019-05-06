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

  render() {
    const { type, ...rest } = this.props;

    if (type == 'outlined') {
      return <SelectOutlined {...rest} />;
    } else if (type == 'filled') {
      return <SelectFilled {...rest} />;
    } else {
      return <SelectFlat {...rest} />;
    }
  }
}

export default withTheme(TextField);
