import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as ColorTool } from 'color';
import { Ripple } from '../../../../src/index';
import { View, Text } from 'react-native';

class ColorBlock extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
    header: PropTypes.string,
  };

  copyToClipboard = () => {
    var textField = document.createElement('textarea');
    textField.innerHTML = this.props.color;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  render() {
    const { name, color, header } = this.props;
    const textColor = ColorTool(color).isLight() ? 'black' : 'white';

    return (
      <Ripple
        onClick={this.copyToClipboard}
        style={{
          height: header ? 130 : 50,
          padding: 16,
          backgroundColor: color,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          cursor: 'pointer',
          width: '100%',
        }}>
        <View>
          {header ? <Text style={{ color: textColor }}>{header}</Text> : null}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: textColor }}>{name}</Text>
          <Text style={{ color: textColor }}>{color}</Text>
        </View>
      </Ripple>
    );
  }
}

export default ColorBlock;
