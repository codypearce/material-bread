import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import TextButton from './TextButton/TextButton';
import OutlinedButton from './OutlinedButton/OutlinedButton';
import ContainedButton from './ContainedButton/ContainedButton';
import FlatButton from './FlatButton/FlatButton';

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
