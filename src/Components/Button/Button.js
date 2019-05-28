import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import TextButton from './TextButton/TextButton.js';
import OutlinedButton from './OutlinedButton/OutlinedButton.js';
import ContainedButton from './ContainedButton/ContainedButton.js';
import FlatButton from './FlatButton/FlatButton.js';

class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
  };

  render() {
    const { type, ...rest } = this.props;

    if (type == 'outlined') {
      return <OutlinedButton {...rest} />;
    } else if (type == 'contained') {
      return <ContainedButton {...rest} />;
    } else if (type === 'flat') {
      return <FlatButton {...rest} />;
    } else {
      return <TextButton {...rest} />;
    }
  }
}

export default withTheme(Button);
