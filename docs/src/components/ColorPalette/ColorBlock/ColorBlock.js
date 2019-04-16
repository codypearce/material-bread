import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as ColorTool } from 'color';
import { Ripple } from '../../../../../src';
import { View, Text } from 'react-native';
import styles from './ColorBlock.styles';

export default class ColorBlock extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
        key={name}
        onClick={this.copyToClipboard}
        style={[
          styles.ripple,
          {
            height: header ? 130 : 50,
            backgroundColor: color,
          },
        ]}>
        <View>
          {header ? <Text style={{ color: textColor }}>{header}</Text> : null}
        </View>
        <View style={styles.textRow}>
          <Text style={{ color: textColor }}>{name}</Text>
          <Text style={{ color: textColor }}>{color}</Text>
        </View>
      </Ripple>
    );
  }
}
