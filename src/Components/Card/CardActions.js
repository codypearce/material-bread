import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Button from '../Button/Button';
import IconButton from '../IconButton';

class CardActions extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    leftActionItems: PropTypes.array,
    rightActionItems: PropTypes.array,
  };

  _leftActionItems() {
    const { leftActionItems } = this.props;
    return leftActionItems.map(item => {
      if (item.name) {
        return (
          <Button key={item.name} onPress={item.onPress} text={item.name} />
        );
      } else {
        return item;
      }
    });
  }
  _rightActionItems() {
    const { rightActionItems } = this.props;
    return rightActionItems.map(item => {
      if (item.name) {
        return (
          <IconButton
            key={item.name}
            onPress={item.onPress}
            name={item.name}
            size={item.size ? item.size : 24}
            color={item.color ? item.color : 'rgba(0,0,0,.57)'}
            style={{ marginLeft: 8 }}
          />
        );
      } else {
        return item;
      }
    });
  }

  render() {
    const { style, leftActionItems, rightActionItems } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.actions}>
          {leftActionItems && this._leftActionItems()}
        </View>
        <View style={styles.moreActions}>
          {rightActionItems && this._rightActionItems()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default withTheme(CardActions);
