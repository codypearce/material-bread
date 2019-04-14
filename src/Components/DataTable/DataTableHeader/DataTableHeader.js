import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';
import IconButton from '../../IconButton/IconButton';
import styles from './DataTableHeader.styles';

class DataTableHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    rightActions: PropTypes.array,
    leftActions: PropTypes.array,
    title: PropTypes.string,
  };
  static defaultProps = {
    borderBottomColor: 'rgb(224, 224, 224)',
  };

  _renderTitle() {
    const { title, leftActions } = this.props;
    if (!title) return null;
    return (
      <Text style={[styles.title, { marginLeft: leftActions ? 12 : 0 }]}>
        {title}
      </Text>
    );
  }
  _renderActions(actionItems, position) {
    if (!actionItems) return null;
    return (
      <View style={styles.actions}>
        {actionItems.map((item, index) => {
          if (item.name) {
            return (
              <IconButton
                key={item.name}
                name={item.name}
                size={24}
                color={'rgba(0,0,0,.87)'}
                style={{
                  marginRight:
                    index + 1 === actionItems.length || position === 'left'
                      ? 0
                      : 16,
                  marginLeft:
                    index + 1 === actionItems.length || position === 'right'
                      ? 0
                      : 16,
                }}
                onPress={item.onPress}
              />
            );
          } else {
            return item;
          }
        })}
      </View>
    );
  }

  _renderContent() {
    const { rightActions, leftActions } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.left}>
          {this._renderActions(leftActions, 'left')}
          {this._renderTitle()}
        </View>

        {this._renderActions(rightActions, 'right')}
      </View>
    );
  }

  render() {
    const { children, style } = this.props;

    return (
      <View style={[styles.dataTableHeader, style]}>
        {children ? children : this._renderContent()}
      </View>
    );
  }
}

export default withTheme(DataTableHeader);
