import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';

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

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
  },

  textContainer: {
    marginLeft: 16,
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: 'rgba(0,0,0,.87)',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(0,0,0,.6)',
  },
});

export default withTheme(CardHeader);
