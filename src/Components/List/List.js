import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import BodyText from '../Typography/BodyText/BodyText.js';
import Paper from '../Paper/Paper.js';
import styles from './List.styles';

class List extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    shadow: PropTypes.number,
    subheader: PropTypes.string,
    testID: PropTypes.string,
  };

  _renderSubheader() {
    const { subheader } = this.props;

    return <BodyText style={styles.subheader}>{subheader}</BodyText>;
  }
  render() {
    const { style, shadow, subheader, testID } = this.props;
    return (
      <Paper
        shadow={shadow ? shadow : 0}
        style={[{ backgroundColor: '#fff' }, style]}
        testID={testID}>
        {subheader ? this._renderSubheader() : null}
        {this.props.children}
      </Paper>
    );
  }
}

export default withTheme(List);
