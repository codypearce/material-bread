import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Paper from '../Paper';

class Card extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    outlined: PropTypes.bool,
    elevation: PropTypes.number,
  };
  render() {
    const { style, outlined, elevation } = this.props;
    return (
      <Paper
        elevation={elevation ? elevation : 1}
        radius={4}
        style={{
          ...style,
          borderWidth: outlined ? StyleSheet.hairlineWidth : 0,
          borderBottomColor: 'rgba(0,0,0,.4)',
        }}>
        {this.props.children}
      </Paper>
    );
  }
}

export default withTheme(Card);
