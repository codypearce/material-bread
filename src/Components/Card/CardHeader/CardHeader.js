import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import styles from './CardHeader.styles';

class CardHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    thumbnail: PropTypes.node,
    action: PropTypes.node,
    title: PropTypes.string,
    titleStyles: PropTypes.object,
    subtitle: PropTypes.string,
    subtitleStyles: PropTypes.string,
    style: PropTypes.object,
  };

  _renderAction() {
    const { action } = this.props;
    if (!action) return null;
    return <View style={styles.right}>{action}</View>;
  }

  _renderText() {
    return (
      <View style={styles.textContainer}>
        {this._renderTitle()}
        {this._renderSubtitle()}
      </View>
    );
  }

  _renderTitle() {
    const { title, titleStyles } = this.props;
    if (!title) return null;
    return <Text style={[styles.title, titleStyles]}>{title}</Text>;
  }

  _renderSubtitle() {
    const { subtitle, subtitleStyles } = this.props;
    if (!subtitle) return null;
    return <Text style={[styles.subtitle, subtitleStyles]}>{subtitle}</Text>;
  }

  render() {
    const { thumbnail, children, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.left}>
          {thumbnail ? thumbnail : null}
          {children ? children : this._renderText()}
        </View>
        {this._renderAction()}
      </View>
    );
  }
}

export default withTheme(CardHeader);
