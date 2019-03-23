import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorBlock from './ColorBlock';
import { Colors } from '../../../../src/index';

const palleteList = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const palleteListExtra = ['A100', 'A200', 'A400', 'A700'];

export default class ColorPalette extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    hasExtra: PropTypes.bool,
    style: PropTypes.object,
  };

  render() {
    const { color, name, hasExtra, style } = this.props;
    return (
      <div style={style}>
        <ColorBlock
          key={500}
          name={500}
          color={Colors[color][500]}
          header={name}
        />
        {palleteList.map(item => {
          return (
            <ColorBlock
              key={item.name}
              name={item}
              color={Colors[color][item]}
            />
          );
        })}
        {hasExtra
          ? palleteListExtra.map(item => {
              return (
                <ColorBlock
                  key={item.name}
                  name={item}
                  color={Colors[color][item]}
                />
              );
            })
          : null}
      </div>
    );
  }
}
