import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import withTheme from '../../Theme/withTheme';

class Divider extends Component {
  static propTypes = {
    style: PropTypes.object,
    theme: PropTypes.object,
    marginVertical: PropTypes.number,
  };
  render() {
    const { style, theme, marginVertical, ...rest } = this.props;

    return (
      <View
        style={[
          theme.divider,
          { marginVertical: marginVertical ? marginVertical : 8 },
          style,
        ]}
        {...rest}
      />
    );
  }
}

export default withTheme(Divider);
