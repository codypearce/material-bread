import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import withTheme from '../Theme/withTheme';
import Paper from './Paper';
import IconButton from './IconButton';

class Appbar extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.object,
    title: PropTypes.string,
    renderRight: PropTypes.node,
    hasMenuButton: PropTypes.bool,
    isSearch: PropTypes.bool,
  };

  static defaultProps = {
    hasMenuButton: true,
  };

  _renderRight() {
    return (
      <Fragment>
        <IconButton
          name="favorite"
          size={24}
          color={'white'}
          style={{ marginRight: 16 }}
        />
        <IconButton
          name="search"
          size={24}
          color={'white'}
          style={{ marginRight: 16 }}
        />
        <IconButton name="more-vert" size={24} color={'white'} />
      </Fragment>
    );
  }

  _renderNormal() {
    const { title, renderRight, hasMenuButton } = this.props;
    return (
      <Fragment>
        <View style={[styles.left]}>
          {hasMenuButton ? (
            <IconButton name="menu" size={24} color={'white'} />
          ) : null}
          <Text
            style={[styles.pageTitle, { marginLeft: hasMenuButton ? 32 : 0 }]}>
            {title}
          </Text>
        </View>
        <View style={styles.right}>
          {renderRight ? renderRight() : this._renderRight()}
        </View>
      </Fragment>
    );
  }

  _renderSearch() {
    return (
      <Fragment>
        <IconButton name="arrow-back" size={24} color={'black'} />
        <TextInput style={{ flex: 1, marginLeft: 8 }} placeholder={'Search'} />
        <IconButton name="close" size={24} color={'black'} />
      </Fragment>
    );
  }

  render() {
    const { backgroundColor, theme, style, isSearch, ...rest } = this.props;

    let actualBackgroundColor = backgroundColor
      ? backgroundColor
      : theme.base.primary;

    if (isSearch) {
      actualBackgroundColor = 'white';
    }

    return (
      <Paper
        style={[
          styles.appbar,
          { backgroundColor: actualBackgroundColor },
          style,
        ]}
        {...rest}>
        {isSearch ? this._renderSearch() : this._renderNormal()}
      </Paper>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    height: 56,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: 18,
    color: 'white',
    marginLeft: 32,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default withTheme(Appbar);
